/**
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  let dep = 0;
  return seq.split("").map(item => item === '(' ? ++dep & 1 : dep-- & 1);
};