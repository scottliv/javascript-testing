module.exports = function palindrome(string) {
  if (typeof string !== 'string') {
    throw new Error();
  }
  const forewards = string
    .toLowerCase()
    .replace(/[^a-z0-9]/g, '')
    .split('')
    .join('');

  const backwards = forewards
    .split('')
    .reverse()
    .join('');
  return forewards === backwards;
};
