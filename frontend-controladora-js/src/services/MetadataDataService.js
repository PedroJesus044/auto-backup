import http from "../http-common";
import authHeader from './auth-header';

class MetadataDataService {
  getAll() {
    return http.get("/metadatas", { headers: authHeader() });
  }

  get(id) {
    return http.get(`/metadatas/${id}`, { headers: authHeader() });
  }

  create(data) {
    return http.post("/metadatas", data, { headers: authHeader() });
  }

  update(id, data) {
    return http.put(`/metadatas/${id}`, data, { headers: authHeader() });
  }

  delete(id) {
    return http.delete(`/metadatas/${id}`, { headers: authHeader() });
  }

  deleteAll() {
    return http.delete(`/metadatas`, { headers: authHeader() });
  }

  getMetaBackup(data){
    return http.get(`/metadatas/metabackup`,  { params: { id_backup: data }, headers: authHeader() });
  }
}

export default new MetadataDataService();
