from threading import Thread

import paramiko, executor
import paramiko.util
import logging
logger = logging.getLogger(__name__)

#Este comando te va a ejecutar tantos comandos como quieras de forma paralela.
#Sin embargo te va a estar generando muchísimos clientes ssh
#Eso ocupará muchos recursos dependiendo de cuántos clientes ssh estén abiertos

estados = []
status = 0
def execute_dedicated_here(command, hostname, username, id_rsa_filename, password, port, extra):
    #Hazte un cliente paramiko nuevo, a fuerzas
    #Tiene que ser nuevo
    #Nuevo!!!!
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        #client.connect(hostname=hostname, username=username, password=password, port=port)
        if(id_rsa_filename):
            logger.info(id_rsa_filename)
            logger.info("Attempting SSH key execution: " + id_rsa_filename)
            client.connect(hostname=hostname, username=username, key_filename=id_rsa_filename, port=port)
        else:
            logger.info("Attempting SSH pass execution")
            client.connect(hostname=hostname, username=username, password=password, port=port)

        #logging.info("Ejecutando los comandos por SSH...")
        
        #Esto ya hace append, no es necesario el append de hasta abajo
        estados.append([executor.execute_single(client, command, extra), command[1]])
        
        client.close()
        
    except Exception as e:
        estados.append([0,1])
        logger.critical("[!] Cannot connect to the SSH Server", extra=extra)
        raise Exception('Fallo al ejecutar execute_dedicated - ' + repr(e))
    
def parallel_execute(commands, hostname, username, id_rsa_filename, password, port, extra):
    try:
        global status, estados
        status = 0
        estados = []
        threads = []
        for i in commands:
            threads.append(Thread(target = execute_dedicated_here, args=(i, hostname, username, id_rsa_filename, password, port, extra)))
        
        for t in threads:
            t.start()

        for i in threads:
            i.join()

        logger.info(estados)

        for i in estados:
            if(i[0]!=0):
                status = 1
                if(i[1]==0):
                    raise Exception("[!] Falla en parallel_execute")
        return status
    except Exception as e:
        logger.critical("[!] No se pudo ejecutar parallel_execute " + repr(e), extra=extra)
        raise Exception("[!] No se pudo ejecutar parallel_execute")

'''def parallel_execute(commands, hostname, username, password, port, extra):
    try:
        threads = []
        queues = []
        for i in commands:
            threads.append(Thread(target = executor.execute_dedicated, args=(i, hostname, username, password, port, extra)))
        
        for t in threads:
            t.start()

        for i in threads:
            i.join()

        return 0
    except Exception as e:
        logger.critical("[!] No se pudo ejecutar parallel_execute " + repr(e), extra=extra)
        raise Exception("[!] No se pudo ejecutar parallel_execute")'''

#Este comando te va a ejecutar tantos comandos como quieras de forma secuencial.
def secuential_execute(commands, hostname, username, id_rsa_filename, password, port, extra):
    #Abrir el cliente del servidor a respaldar
    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    try:
        if(id_rsa_filename):
            logger.info(id_rsa_filename)
            logger.info("Attempting SSH key execution: " + id_rsa_filename)
            client.connect(hostname=hostname, username=username, key_filename=id_rsa_filename, port=port)
        else:
            logger.info("Attempting SSH pass execution")
            client.connect(hostname=hostname, username=username, password=password, port=port)
        #logging.info("Ejecutando los comandos por SSH...")
        status = executor.execute(client, commands, extra)
        client.close()
        return status
    except:
        logger.critical("[!] Cannot connect to the SSH Server", extra=extra)
        raise Exception("[!] Cannot connect to the SSH Server")