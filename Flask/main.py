from flask import Flask, request, redirect
import autobackup, os
from time import sleep
from random import randint

app = Flask(__name__)

@app.route("/")
def hello_world():
    try:
        id_backup = request.args.get('id')

        resultado = autobackup.main(id_backup)

        if(resultado == "[ALL OK]"):
            codigo = 200
        if(resultado == "[FINISHED WITH ERRORS]"):
            codigo = 500
        if(resultado == "[NOT OK]"):
            codigo = 500

        return resultado, codigo, {'Access-Control-Allow-Origin':os.environ['FLASK_CORS_OPTIONS']}
        
        #Ojo: Debemos poner el cors apuntando al origen del axios
    except:
        return 'Flask', 200, {'Access-Control-Allow-Origin':os.environ['FLASK_CORS_OPTIONS']}