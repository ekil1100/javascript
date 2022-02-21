/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function (head) {
  if (!head) {
    return []
  }

  function fn(head, reversed) {
    if (head.next) {
      reversed = fn(head.next, reversed)
    }
    reversed.push(head.val)
    return reversed
  }

  return fn(head, [])
}
