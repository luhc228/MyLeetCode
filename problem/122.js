/**
 * @param {number[]} prices
 * @return {number}
 */
// 贪心算法解决
var maxProfit = function(prices) {
  let sum = 0;
  const length = prices.length;
  
  for (let i = 0; i < length - 1; i++) {
      if (prices[i] < prices[i+1]) {
          sum = prices[i+1] - prices[i] + sum;
      }
  }
  
  return sum;
};
