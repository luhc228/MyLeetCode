/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法一：使用一个数组存放已经访问过的数组
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let arr = [head]

  while (arr[arr.length - 1].next !== null) {
    arr.push(arr[arr.length - 1].next)
  }
  return arr[Math.floor(arr.length / 2)]
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法二 单指针法
 * 1. 先统计链表的长度
 * 2. 使用单指针指向数组的当前下标
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  // 记录链表的长度
  let k = 0
  // 初始化node
  let node = head
  while (node.next !== null) {
    k += 1
    node = node.next
  }
  // 当前遍历的元素下标
  let cur = 0
  let curNode = head
  while (cur < k / 2) {
    cur += 1
    curNode = curNode.next
  }

  return curNode
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法三：双指针法 
 * 使用一个快指针和一个慢指针，快指针一次走两步，慢指针一次走一步，当快指针走到终点时候，慢指针走到中点
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  let fast = head
  let slow = head
  while (fast !== null && fast.next !== null) {
    fast = fast.next.next
    slow = slow.next
  }

  return slow
};