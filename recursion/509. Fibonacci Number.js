/**
 * solution1 递归版
 * @param {number} N
 * @return {number}
 */
var fib = function(N) {
  if (N === 0 || N === 1) {
    return N;
  }

  return fib(N - 2) + fib(N - 1);
};

/**
 * use Map to store the value which created before
 * @param {number} N
 * @return {number}
 */
let map = new Map([
  [0, 0],
  [1, 1]
]);

var fib = function(N) {
  if (map.has(N)) {
    return map.get(N);
  }

  const result = fib(N - 2) + fib(N - 1);
  map.set(N, result);
  return result;
};
