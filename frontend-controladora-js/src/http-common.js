import axios from "axios";

export default axios.create({
  //baseURL: process.env.VUE_APP_ABKP_AXIOS_BASEURL,
  //baseURL: "http://10.22.165.29:8080/api",
  //baseURL: "http://auto-backup-express-1:8080/api",
  baseURL: "https://auto-backup-express-git-pibarrap044-dev.apps.sandbox-m2.ll9k.p1.openshiftapps.com/",
  
  headers: {
    //"Content-type": "application/json"
    //'Origin':'https://auto-backup-vuejs-git-or15.apps.ocpprod.pjedomex.gob.mx',
    'Content-Type': 'application/json; charset=utf-8',
    // 'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': '*',
    // 'Access-Control-Allow-Headers':'Content-Type'
  }
});