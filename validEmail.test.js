const validEmail = require('./validEmail');


/*
  Syntactic Email Validation as described here:
  https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html#syntactic-validation

  - The email address contains two parts, separated with an @ symbol.
  - The email address does not contain dangerous characters (such as backticks, single or double quotes, or null bytes).
    + Exactly which characters are dangerous will depend on how the address is going to be used (echoed in page, inserted into database, etc).
  - The domain part contains only letters, numbers, hyphens (-) and periods (.).
  - The email address is a reasonable length:
    + The local part (before the @) should be no more than 63 characters.
    + The total length should be no more than 254 characters.
*/

// TODO: Write tests for the syntactic email validation described above.
