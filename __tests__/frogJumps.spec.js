const frogJumps = require("../lib/frogJumps.js");

describe("frogJumps", () => {
  test("when start is equal to end", () => {
    const result = frogJumps(10, 10, 5);
    expect(result).toEqual(0);
  });
  test("when start is greater than end", () => {
    const result = frogJumps(11, 5, 5);
    expect(result).toEqual(0);
  });
  test("when jump is not greater than 0", () => {
    const result = frogJumps(1, 5, 0);
    expect(result).toEqual(0);
  });
  test("when start is less than end", () => {
    const result = frogJumps(2, 6, 3);
    expect(result).toEqual(2);
  });
  test("given invalid input", () => {
    // error tests need to be wrapped in another function to
    // properly capture the error
    const result = () => {
      frogJumps("hi", "my", "guy");
    };
    expect(result).toThrowError();
  });
});
