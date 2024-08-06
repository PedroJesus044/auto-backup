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
    return http.put(`/backups/${id}`, data, { headers: authHeader() });
  }

  delete(id) {
    return http.delete(`/backups/${id}`, { headers: authHeader() });
  }

  deleteAll() {
    return http.delete(`/tutorials`, { headers: authHeader() });
  }
}

export default new TutorialDataService();
