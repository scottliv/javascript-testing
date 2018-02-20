module.exports = function compress(string) {
  if (typeof string !== 'string') {
    throw new Error();
  }
  let i = 0;
  const counter = string.split('').reduce((acc, curr) => {
    if (acc[i] === undefined) {
      acc.push({ [curr]: 1 });
    } else if (curr in acc[i]) {
      acc[i][curr]++;
    } else {
      acc.push({ [curr]: 1 });
      i++;
    }

    return acc;
  }, []);

  return counter.map(obj => Object.keys(obj).map(key => `${key}${obj[key]}`)).join('');
};
