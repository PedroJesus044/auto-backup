import re
def function_handler(command, out):
    if(re.match(r"dir \/s \/-c .*", command)):
        out = out.replace("\t", ' ')
        focus = re.search(r"[0-9]+ [^\s]+\.[^\s]+", out).group()
        print ("Focuseando", focus)
        size = focus.split(" ")[0]
        file = focus.split(" ")[1]
            
        print("Se ejecuta un [du -s], enviando a la DB, Peso: "+str(size)+" Archivo: "+file)



a = '''28/06/2024  10:37 a. m.              1024 salida.tar
               1 archivos           1024 bytes

     Total de archivos en la lista:
               1 archivos           1024 bytes
               0 dirs     86877081600 bytes libres'''




function_handler("dir /s /-c salida.tar", a)