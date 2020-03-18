/**
 * 方法一 IOU
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  return (Math.max(rec1[0], rec2[0]) < Math.min(rec1[2], rec2[2])) && (Math.max(rec1[1], rec2[1]) < Math.min(rec1[3], rec2[3]))
};

/**
 * 方法二 检查位置
 * 想象一下两个矩形没有重叠是什么样子的？
 * 有四种情况，在某个矩形的上 下 左 右 四个地方
 * 我们只需要满足四种情况中其中一种就可以了
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
  return !(rec1[2] <= rec2[0] // 左边
    || rec1[1] >= rec2[3] // 上边
    || rec1[0] >= rec2[2] // 右边
    || rec1[3] <= rec2[1]) // 下边
};