from flask import Flask, request, redirect
import autobackup
from time import sleep
from random import randint

app = Flask(__name__)

@app.route("/")
def hello_world():
    try:
        id_backup = request.args.get('id')

        resultado = autobackup.main(id_backup)

        if(resultado=='[OK]'):
            return resultado, 200, {'Access-Control-Allow-Origin':'*'}
        elif(resultado=='[NOT OK]'):
            return resultado, 200, {'Access-Control-Allow-Origin':'*'}
        else:
            return resultado, 200, {'Access-Control-Allow-Origin':'*'}
        
        #Ojo: Debemos poner el cors apuntando al origen del axios
    except:
        return 'Falla!', 200, {'Access-Control-Allow-Origin':'*'}