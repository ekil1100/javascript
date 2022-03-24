/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
      this.val = (val===undefined ? 0 : val)
      this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = function(l1, l2) {
    if (!l1) return l2
    if (!l2) return l1
    if (!l1 && !l2) return null
    let temp = new ListNode()
    const head = temp
    let carry = 0

    while (l1 && l2) {
        const sum = l1.val + l2.val + carry
        temp.next = new ListNode(sum % 10)
        carry = (sum - sum % 10) / 10
        temp = temp.next
        l1 = l1.next
        l2 = l2.next
    }

    let r = l1 || l2

    while (carry > 0 && r) {
        const sum = r.val + carry
        temp.next = new ListNode(sum % 10)
        carry = (sum - sum % 10) / 10
        temp = temp.next
        r = r.next
    }

    if (carry > 0) {
        if (r) {
            temp.next = new ListNode(r.val + carry)
            temp = temp.next
            r = r.next
        }
        else {
            temp.next = new ListNode(carry)
            temp = temp.next
        }
    }

    temp.next = r

    return head.next
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

const l1 = new ListNode(2)
l1.next = new ListNode(4)
l1.next.next = new ListNode(3)

const l2 = new ListNode(5)
l2.next = new ListNode(6)
l2.next.next = new ListNode(6)

addTwoNumbers(l1, l2) // ?
