export default function authHeader() {
  const token = sessionStorage.getItem('token');
  if (token) {
    // for Node.js Express back-end
    //console.log(token)
    return { 'Authorization': token };
  } else {
    return {};
  }
}
