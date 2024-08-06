import http from "../http-common";
import authHeader from './auth-header';

class TutorialDataService {
  getAll() {
    return http.get("/backups", { headers: authHeader() });
  }

  get(id) {
    return http.get(`/backups/${id}`, { headers: authHeader() });
  }

  create(data) {
    return http.post("/backups", data, { headers: authHeader() });
  }

  update(id, data) {
    return http.put(`/codigos/${id}`, data, { headers: authHeader() });
  }

  delete(id) {
    return http.delete(`/codigos/${id}`, { headers: authHeader() });
  }

  deleteAll() {
    return http.delete(`/tutorials`, { headers: authHeader() });
  }

  findByTitle(title) {
    return http.get(`/tutorials?title=${title}`, { headers: authHeader() });
  }

  findDifferentBackupBlocks(id){
    return http.get(`/codigos/diffblocksbkpid?id_backup=${id}`, { headers: authHeader() });
  }

  findLinesOfBlock(id_backup, no_bloque){
    return http.get(`/codigos/codebackupblock?id_backup=${id_backup}&no_bloque=${no_bloque}`, { headers: authHeader() });
  }

  addLinea(data){
    return http.post("/codigos/addlinetospecificblock", data, { headers: authHeader() });
  }

  addBloque(data){
    console.log(data);
    return http.post(`/codigos/addlinetospecificbackup`, data, { headers: authHeader() });
  }

  updateParallelism(data){
    console.log(data);
    return http.put(`/codigos/updateparallelism`, data, { headers: authHeader() });
  }

}

export default new TutorialDataService();
