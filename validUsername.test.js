const validUsername = require('./validUsername');

describe('Validate Usernames', () => {
  test('may contain numbers', () => {
    expect(validUsername('pikachu')).toBeTruthy();
    expect(validUsername('pikachu42')).toBeTruthy();
    expect(validUsername('char')).toBeTruthy();
  })

  test('must be at least 4 characters in length', () => {
    expect(validUsername('char')).toBeTruthy();
    expect(validUsername('if')).toBeFalsy();
    expect(validUsername('nil')).toBeFalsy();
  })

  test('cannot start with non-alpha character', () => {
    expect(validUsername('#1pikachu')).toBeFalsy();
    expect(validUsername('1pikachu')).toBeFalsy();
    expect(validUsername('_pikachu')).toBeFalsy();
  })

  test('cannot contain special characters', () => {
    expect(validUsername('tweet@me')).toBeFalsy();
    expect(validUsername('my_name_is')).toBeFalsy();
  })

});