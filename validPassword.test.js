const validPassword = require('./validPassword');

/*
  Following some of the Password guidance here:
  https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html#implement-proper-password-strength-controls

  - Password Length:
    + Min length 8 (shorter is considered weak)
    + Max length 64 (when using bcrypt: https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html#maximum-password-lengths)
  - Allow usage of all characters including unicode and whitespace. There should be no password composition rules limiting the type of characters permitted.

  TODO: Add a list of at least 10 weak passwords that validation should fail on in your tests and implement it.
*/

describe('Valid Passwords', () => {
  test('have a min length of 8', () => {
    expect(validPassword('secret')).toBeFalsy();
    expect(validPassword('secrets')).toBeFalsy();
    expect(validPassword('secrets1')).toBeTruthy();
  })

  test('have a max length of 64', () => {
    expect(validPassword('q'.repeat(64))).toBeTruthy();
    expect(validPassword('2y'.repeat(32))).toBeTruthy();
    expect(validPassword('q'.repeat(65))).toBeFalsy();
    expect(validPassword('2y'.repeat(70))).toBeFalsy();
  })

  test('allow all characters', () => {
    expect(validPassword("💀😈~!@#$%^&*()_+`1234567890-=[]{}:\";'<>,./?")).toBeTruthy();
  })
  
  test('should not have composition rules', () => {
    expect(validPassword("greatpassword")).toBeTruthy();
    expect(validPassword("98283486523932749")).toBeTruthy();
  })

});
