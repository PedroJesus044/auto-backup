import logging, paramiko, re, mariadb, os
#Se encarga de ejecutar comandos en un servidor remoto por SSH.
#Requiere un cliente de SSH hecho con el módulo Paramiko de Python

#Ejecuta un arreglo de varios comandos, por ejemplo:
#commands = ['mkdir /any_dir', 'touch /anydir/anyfile' ,'rm -rf /any_dir']

import logging
logger = logging.getLogger(__name__)


def function_handler(command, out, extra):
    #Se crean conexiones justo para esto
    try:
        conn = mariadb.connect(
            user=os.environ['ABKP_DB_USER'],
            password=os.environ['ABKP_DB_PASS'],
            host=os.environ['ABKP_DB_HOST'],
            port=3306,
            database=os.environ['ABKP_DB_NAME']
        )

    except mariadb.Error as e:
        print(f"Error connecting to MariaDB Platform: {e}")

    cur = conn.cursor()


    #En caso de que se haya ejecutado un du -s
    if(re.match(r"du -s .*", command)):
                    out = out.replace("\t", ' ')
                    size = re.search('[0-9]+', out)
                    file = re.sub(r"([0-9]+ )", "", out)
                    if(size and file):
                        size = int(size.group())
                        #file = file.group()
                        
                        #print(size, file)
                        
                        extra.update({'archivo':file})
                        extra.update({'peso':int(size)}) 
                    logger.info("Se ejecuta un [du -s], enviando a la DB")
                    query = "INSERT INTO file_traces (id_backup, size, file) VALUES ("+ str(extra["id_backup"]) +", "+ str(extra["peso"]) +", '"+ str(extra["archivo"]) +"')"
                    cur.execute(query)
                    logger.info(out, extra=extra)
    conn.commit()
    conn.close()


def execute(client, commands, extra):
    status = 0
    try:
        for command in commands:
            logger.info("Ejecutando: "+command, extra=extra)
            stdin, stdout, stderr = client.exec_command(command)
            stdin.close()
            
            out = stdout.read().decode().rstrip()
            if out:
                function_handler(command, out, extra)
                '''
                if(re.match(r"du -s .*", command)):
                    out = out.replace("\t", ' ')
                    size = re.search('[0-9]+', out)
                    file = re.sub(r"([0-9]+ )", "", out)
                    if(size and file):
                        size = int(size.group())
                        #file = file.group()
                        
                        #print(size, file)
                        
                        extra.update({'archivo':file})
                        extra.update({'peso':int(size)}) 
                    logger.info("Se ejecuta un [du -s], enviando a la DB")
                    logger.info(out, extra=extra)'''
            logger.debug(stdout.read().decode(), extra=extra)
            if(stdout.channel.recv_exit_status()!=0):
                err = stderr.read().decode()
                out = stdout.read().decode()
                if out:
                    logger.info(out, extra=extra)
                if err:
                    logger.error("Proceso terminado con errores: " + str(stdout.channel.recv_exit_status()), extra=extra)
                    logger.error("Error: "+err, extra=extra)
                    status = 1
        return status
    except Exception as e:
        logger.critical("Fallo al ejecutar execute "+ repr(e), extra=extra)
        raise Exception('Fallo al ejecutar execute - ' + repr(e))

#Ejecuta un solo comando, por ejemplo:
#command = 'touch anyfile'
def execute_single(client, command, extra):
    status = 0
    try:
        logger.info("Ejecutando: "+command, extra=extra)
        stdin, stdout, stderr = client.exec_command(command)
        stdin.close()
        out = stdout.read().decode().rstrip()
        if out:
            function_handler(command, out, extra)
        logger.debug(stdout.read().decode(), extra=extra)
        if(stdout.channel.recv_exit_status()!=0):
            err = stderr.read().decode()
            if err:
                logger.error("Proceso terminado con errores: " + str(stdout.channel.recv_exit_status()), extra=extra)
                logger.error("Error: "+err, extra=extra)
                status = 1
        return status
    except Exception as e:
        logger.critical("Fallo al ejecutar execute_single - ", extra=extra)
        raise Exception('Fallo al ejecutar execute_single - ' + repr(e))

def execute_dedicated(command, hostname, username, password, port, extra):
    #Hazte un cliente paramiko nuevo, a fuerzas
    #Tiene que ser nuevo
    #Nuevo!!!!
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        client.connect(hostname=hostname, username=username, password=password, port=port)

        #logging.info("Ejecutando los comandos por SSH...")
        execute_single(client, command, extra)

        #logging.info("[OK]")
        client.close()
    except Exception as e:
        logger.critical("[!] Cannot connect to the SSH Server", extra=extra)
        raise Exception('Fallo al ejecutar execute_dedicated - ' + repr(e))