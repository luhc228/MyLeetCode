/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 方法1
 * 使用 Set记录已访问过的节点
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let nodeSet = new Set()
  while (head !== null) {
    if (nodeSet.has(head)) {
      return head
    }
    nodeSet.add(head)
    head = head.next
  }
  return null
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * 方法二：快慢指针
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  if (head == null || head.next == null) {
    return null
  }

  let slow = head
  let fast = head

  while (true) {
    // 链表无环
    if (fast == null || fast.next == null) {
      return null
    }
    fast = fast.next.next
    slow = slow.next
    // 第一次相遇
    if (fast == slow) {
      break
    }
  }

  fast = head
  while (fast != slow) {
    fast = fast.next
    slow = slow.next
  }
  return fast
};
