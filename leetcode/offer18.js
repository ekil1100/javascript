/**
 * https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
const deleteNode = function(head, val) {
    let curr = head
    let prev = null
    while (curr) {
        if (curr.val === val) {
            if (prev) {
                prev.next = curr.next
                curr = curr.next
            }
            else {
                head = head.next
            }
            break
        }
        else {
            prev = curr
            curr = curr.next
        }
    }
    return head
}

function ListNode(val) {
    this.val = val
    this.next = null
}

const list = new ListNode(1)
list.next = new ListNode(2)
list.next.next = new ListNode(3)
list.next.next.next = new ListNode(4)

deleteNode(list, 4)
