/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  let result = [];
  _generate(0, 0, n, '', result);
  return result;
};

function _generate(left, right, n, str, result) {
  if (left === n && right === n) {
    result.push(str);
    return;
  }

  if (left < n) {
    _generate(left + 1, right, n, str + '(', result);
  }

  if (left > right && right < n) {
    _generate(left, right + 1, n, str + ')', result);
  }
}
