import axios from "axios";

export default axios.create({
  baseURL: "http://10.22.165.29:8080/api",
  headers: {
    "Content-type": "application/json"
  }
});
