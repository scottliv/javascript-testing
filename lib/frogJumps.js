module.exports = function frogJumps(start, end, jumpLength) {
  const args = [...arguments];
  args.forEach(element => {
    if (isNaN(element)) {
      throw new Error();
    }
  });
  if (start > end || jumpLength <= 0) {
    return 0;
  }
  return Math.ceil(((end - start) / jumpLength).toFixed(2));
};
