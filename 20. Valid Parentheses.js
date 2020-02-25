/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = ["?"];
  for (let item in s) {
    if (s[item] === '(') {
      stack.push(')')
    } else if (s[item] === '[') {
      stack.push(']')
    } else if (s[item] === '{') {
      stack.push('}')
    } else if (stack.length !== 0 && stack.pop() !== s[item]) {
      return false
    }
  }

  return stack.length === 1
};