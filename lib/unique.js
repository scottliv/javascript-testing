module.exports = function unique(string) {
  if (typeof string !== 'string') {
    throw new Error();
  }
  const charCount = string.split('').reduce((acc, curr) => {
    if (acc[curr] === undefined) {
      acc[curr] = 1;
    } else {
      acc[curr] += 1;
    }
    return acc;
  }, {});

  const charKeys = Object.keys(charCount);
  let uniqueChar;

  for (let i = 0; i < charKeys.length; i += 1) {
    if (charCount[charKeys[i]] === 1) {
      uniqueChar = charKeys[i];
      break;
    }
  }
  return uniqueChar;

  // return Object.keys(charCount).map((key) => {
  //   if (charCount[key] === 1) {
  //     return key;
  //   }
  // })[0];
};
