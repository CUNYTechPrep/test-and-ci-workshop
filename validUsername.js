function validUsername(username) {
  // TODO: implement
  let regex = /^[a-zA-Z0-9!@#\$%\^\&*\)\(+=._-]+$/g;
  if(username.length < 4) return false;
  if(username.startsWith("[A-Za-z0-9]*"))
    return false;
  return !regex.test(username);
  return true;  
  
}

module.exports = validUsername; 