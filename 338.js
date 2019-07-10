/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
  let res = [];
  for (i = 0; i <= num; i++) {
    res.push(count2(i))
  }
  
  return res;
};

var count2 = function(num) {
  let count = 0;
  while (num !== 0) {
    num = num & (num - 1);
    count++;
  }
  return count;
}
