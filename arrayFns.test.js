const { arrayMerge, arrayPad } = require('./arrayFns');


describe('Merge arrays', () => {
  test('merging with empty array', () => {
    expect(arrayMerge([1, 2, 3], [])).toEqual([1, 2, 3]);
  })

})

describe('Pad arrays', () => {
  test('pad with strings', () => {
    expect(arrayPad([1, 2, 3, 4], 2, 'unicorn')).toEqual([1, 2, 3, 4, 'unicorn', 'unicorn']);
  })

  test('padding with arrays does not flatten', () => {
    expect(arrayPad([1, 2, 3, 4], 2, ['unicorn'])).not.toEqual([1, 2, 3, 4, 'unicorn', 'unicorn']);
    expect(arrayPad([1, 2, 3, 4], 2, ['unicorn'])).toEqual([1, 2, 3, 4, ['unicorn'], ['unicorn']]);
  })

})
