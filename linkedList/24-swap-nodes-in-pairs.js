/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法一：迭代法
 * 两个元素两两交换
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }
  // 新建链表哨兵头并创建指针cur
  let dummy = new ListNode(null)
  dummy.next = head

  let prevNode = dummy

  while (head && head.next) {
    let firstNode = head
    let secondNode = head.next

    prevNode.next = secondNode
    firstNode.next = secondNode.next
    secondNode.next = firstNode

    prevNode = firstNode
    head = firstNode.next
  }

  return dummy.next
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法二：递归法
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) {
    return head
  }

  let firstNode = head
  let secondNode = head.next

  firstNode.next = swapPairs(secondNode.next)
  secondNode.next = firstNode

  return secondNode
};