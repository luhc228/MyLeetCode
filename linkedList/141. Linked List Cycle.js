/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 方法1 用一个set记录访问过的节点元素，然后每次都判断当前节点是否已经存在于set中
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  let nodeSet = new Set()
  while (head !== null) {
    if (nodeSet.has(head)) {
      return true
    }
    nodeSet.add(head)
    head = head.next
  }

  return false
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 方法2
 * 快慢指针
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (head == null || head.next == null) {
    return false
  }
  let slow = head
  let fast = head.next
  while (slow !== fast) {
    // 如果没有环，fast指针先到终点
    if (fast == null || fast.next == null) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }

  return true
};