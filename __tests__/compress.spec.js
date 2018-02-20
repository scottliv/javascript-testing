const compress = require('../lib/compress');

describe('compress', () => {
  test('input should be a string', () => {
    const result = () => {
      compress(42);
    };
    expect(result).toThrowError;
  });
  test('valid input no repeating characters', () => {
    const result = compress('abcd');
    expect(result).toEqual('a1b1c1d1');
  });
  test('valid input repeating characters', () => {
    const result = compress('aabccd');
    expect(result).toEqual('a2b1c2d1');
  });
  test('valid input repeating characters, not in order', () => {
    const result = compress('giqaBBi');
    expect(result).toEqual('g1i1q1a1B2i1');
  });
});
