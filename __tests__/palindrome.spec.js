const palindrome = require("../lib/palindrome");

describe("palindrome", () => {
  test("input should be a string", () => {
    const result = () => {
      palindrome(42);
    };
    expect(result).toThrowError;
  });
  test("valid input, not palindrome", () => {
    const result = palindrome("hi");
    expect(result).toEqual(false);
  });
  test("valid input, sentence not palindrome", () => {
    const result = palindrome("Hi there I am not a palindrome");
    expect(result).toEqual(false);
  });
  test("valid input palindrome, no spaces or punctuation", () => {
    const result = palindrome("mom");
    expect(result).toEqual(true);
  });
  test("valid input palindrome, no spaces or punctuation, with capitalization", () => {
    const result = palindrome("Dad");
    expect(result).toEqual(true);
  });
  test("valid input palindrome, spaces and punctuation, with capitalization", () => {
    const result = palindrome("Go hang a salami I'm a lasagna hog");
    expect(result).toEqual(true);
  });
});
