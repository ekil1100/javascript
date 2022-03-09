/**
 * https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
// const getKthFromEnd = function(head, k) {
//     const map = new Map()
//     let i = 0
//     while (head) {
//         map.set(i, head)
//         head = head.next
//         i++
//     }
//     return map.get(i - k)
// }

const getKthFromEnd = function(head, k) {
    let fast = head
    let slow = head
    while (fast && k > 0) {
        fast = fast.next
        k--
    }
    while (fast) {
        slow = slow.next
        fast = fast.next
    }
    return slow
}

function ListNode(val) {
    this.val = val
    this.next = null
}

const list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)

getKthFromEnd(list, 2)
