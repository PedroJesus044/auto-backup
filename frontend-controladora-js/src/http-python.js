import axios from "axios";

export default axios.create({
  baseURL: process.env.VUE_APP_ABKP_FLASK_BASEURL,
  
  headers: {
    'Access-Control-Allow-Origin': '*',
    'origin':'x-requested-with',
    'Access-Control-Allow-Headers': 'POST, GET, PUT, DELETE, OPTIONS, HEAD, Authorization, Origin, Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers, Access-Control-Allow-Origin',
    'Content-Type': 'application/json',
  }
});