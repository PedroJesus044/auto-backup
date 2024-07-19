from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
import autobackup, os
from time import sleep
from random import randint

app = Flask(__name__)

@app.route("/")
def hello_world():
    try:
        flask_cors_options = ['*', 'http://localhost:8080', 'https://localhost:8080', 'http://auto-backup-vuejs-1:8081', 'http://10.22.165.29:8081', 'http://auto-backup-express-1:8080', 'http://10.22.165.29:5000']
        flask_cors_options = '*'
        id_backup = request.args.get('id')

        resultado = autobackup.main(id_backup)

        if(resultado == "[ALL OK]"):
            codigo = 200
        if(resultado == "[FINISHED WITH ERRORS]"):
            codigo = 200
        if(resultado == "[NOT OK]"):
            codigo = 200

        #return resultado, codigo, {'Access-Control-Allow-Origin':os.environ['FLASK_CORS_OPTIONS'].split(",")}
        return resultado, codigo, {'Access-Control-Allow-Origin': '*'}
        
        #Ojo: Debemos poner el cors apuntando al origen del axios
    except:
        #return 'Flask', 200, {'Access-Control-Allow-Origin':os.environ['FLASK_CORS_OPTIONS'].split(",")}
        return resultado, codigo, {'Access-Control-Allow-Origin': '*'}

UPLOAD_FOLDER = 'identities/'
ALLOWED_EXTENSIONS = {'.id_rsa', 'id_rsa'}

app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER

def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/id_rsa_file', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # check if the post request has the file part
        if 'file' not in request.files:
            flash('No file part')
            return "No hay file part", 200, {'Access-Control-Allow-Origin': '*'}
        file = request.files['file']
        # If the user does not select a file, the browser submits an
        # empty file without a filename.
        if file.filename == '':
            #flash('No selected file')
            return "Archivo vacío", 200, {'Access-Control-Allow-Origin': '*'}
        if file and allowed_file(file.filename):
            filename = secure_filename(file.filename)
            file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
            return "Finalmente: " + filename, 200, {'Access-Control-Allow-Origin': '*'}
        return "No if", 200, {'Access-Control-Allow-Origin': '*'}
    resultado =  '''
    <!doctype html>
    <title>Upload new File</title>
    <h1>Upload new File</h1>
    <form method=post enctype=multipart/form-data>
      <input type=file name=file>
      <input type=submit value=Upload>
    </form>
    '''
    return resultado, 200, {'Access-Control-Allow-Origin': '*'}