/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if (x === 0 || x === 1) {
    return x;
  }
  let left = 0, right = x;
  let res = 0;
  while (right >= left) {
    let mid = (left + right) / 2;
    
    if ((mid * mid) === x) {
      return parseInt(mid);
    } else if ((mid * mid) <= x) {
      left = mid + 1;
      res = mid;
    } else {
      right = mid - 1;
    }
  }
  
  return parseInt(res);
};

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  let r = x;
  while(r * r > x) {
    r = parseInt((r + x / r) / 2);
  };
  
  return r;
};