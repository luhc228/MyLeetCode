/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1 == null) {
    return l2
  } else if (l2 == null) {
    return l1
  } else if (l2.val > l1.val) {
    l1.next = mergeTwoLists(l1.next, l2)
    return l1
  } else {
    l2.next = mergeTwoLists(l1, l2.next)
    return l2
  }
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let dummy = new ListNode(0)
  let head = dummy;
  while (l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      head.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      head.next = new ListNode(l2.val)
      l2 = l2.next
    }
    head = head.next
  }
  if (l1 !== null) {
    head.next = l1
  }
  if (l2 !== null) {
    head.next = l2
  }
  return dummy.next
};