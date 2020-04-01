/**
 * 方法一：栈
 * 这里的栈并不是实际创建一个栈去存储数据，而是用一个深度depth记录当前栈的深度
 * 题目说分成两个不相交的有效括号字符串，A 和 B，并划分出使得最大嵌套深度最小的分组。
 * 可以这么想：当depth为奇数时，分给A，当depth为偶数时，分给B，这样就能保证A和B分到各一半的元素
 * @param {string} seq
 * @return {number[]}
 */
var maxDepthAfterSplit = function (seq) {
  let dep = 0;
  return seq.split("").map(item => item === '(' ? ++dep & 1 : dep-- & 1);
};
