/*
  Following some of the Password guidance here:
  https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls

  - Password Length:
    + Min length 8 (shorter is considered weak)
    + Max length 64 (when using bcrypt: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#maximum-password-lengths)
  - Allow usage of all characters including unicode and whitespace. There should be no password composition rules limiting the type of characters permitted.
*/

function validPassword(password) {
  // TODO: implement
  if(password.length < 8) return false;
  if(password.length > 64) return false;

  return true;
}

module.exports = validPassword;