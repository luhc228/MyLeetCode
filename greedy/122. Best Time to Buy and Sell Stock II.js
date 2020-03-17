/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let total = 0
  for (let i = 1, len = prices.length; i < len; i++) {
    if (prices[i] > prices[i - 1]) {
      total += prices[i] - prices[i - 1]
    }
  }
  return total
};