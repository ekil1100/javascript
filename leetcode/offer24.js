// leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var reverseList = function (head) {
//   if (!head) return null
//   function fn(head, newHead) {
//     if (head.next) {
//       newHead = fn(head.next, newHead)
//     }
//     if (!newHead) {
//       newHead = head
//     } else {
//       let temp = newHead
//       while (temp.next) {
//         temp = temp.next
//       }
//       temp.next = new ListNode(head.val)
//     }
//     return newHead
//   }
//   return fn(head, null)
// }

const reverseList = function(head) {
  if (!head) return null
  let curr = head
  let next = null
  let prev = null
  while (curr) {
    next = curr.next
    curr.next = prev
    prev = curr
    curr = next
  }
  return prev
}

function ListNode(val) {
  this.val = val
  this.next = null
}

const head = new ListNode(1)
head.next = new ListNode(2)
head.next.next = new ListNode(3)
head.next.next.next = new ListNode(4)
reverseList(head)
