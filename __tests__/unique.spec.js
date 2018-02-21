const unique = require('../lib/unique');

describe('unique', () => {
  test('input must be a string', () => {
    const result = () => unique(42);
    expect(result).toThrowError();
  });
  test('one unique character', () => {
    const result = unique('B');
    expect(result).toEqual('B');
  });
  test('multiple characters, one unique', () => {
    const result = unique('aababqa', () => {
      expect(result).toBe('q');
    });
  });
  test('multiple characters, one unique', () => {
    const result = unique('frof', () => {
      expect(result).toBe('r');
    });
  });
  test('multiple characters, multiple unique', () => {
    const result = unique('ajfqip', () => {
      expect(result).toBe('a');
    });
  });
  test('no unique characters', () => {
    const result = unique('aabbccdeed', () => {
      expect(result).toBe(undefined);
    });
  });
});
