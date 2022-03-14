/**
 * https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = function(headA, headB) {
    if (!headA || !headB) return null
    let a = headA
    let b = headB
    while (a !== b) {
        a = a ? a.next : headB
        b = b ? b.next : headA
    }
    return a
}

function ListNode(val) {
    this.val = val
    this.next = null
}

const a = new ListNode(4)
a.next = new ListNode(1)
a.next.next = new ListNode(8)
a.next.next.next = new ListNode(4)
a.next.next.next.next = new ListNode(5)

const b = new ListNode(5)
b.next = new ListNode(0)
b.next.next = new ListNode(1)
// b.next.next.next = a.next.next

getIntersectionNode(a, b)
