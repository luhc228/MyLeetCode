/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法1 迭代法
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let cur = head
  let pre = null
  while (cur !== null) {
    // 1. 暂存下一个元素
    const nextTemp = cur.next;
    // 2. 将next指针指向前一个元素
    cur.next = pre
    // 3. pre前进一位
    pre = cur
    // 4. cur前进一位
    cur = nextTemp
  }

  return pre
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 方法2 递归法
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (head === null || head.next === null) {
    return head
  }
  const cur = reverseList(head.next)
  head.next.next = head
  head.next = null
  return cur
};