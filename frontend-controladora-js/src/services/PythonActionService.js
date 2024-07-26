import http from "../http-python";

class PythonActionService {
  runBackup(id_backup) {
    return http.get(`http://10.22.165.29:5000/?id=${id_backup}`);
  }
}

export default new PythonActionService();
