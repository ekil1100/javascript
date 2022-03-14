/**
 * https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/
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
const mergeTwoLists = function(l1, l2) {
    let temp = new ListNode()
    const head = temp
    while (l1 || l2) {
        if (!l1) {
            temp.next = l2
            break
        }
        if (!l2) {
            temp.next = l1
            break
        }
        if (l1.val < l2.val) {
            temp.next = l1
            l1 = l1.next
        }
        else {
            temp.next = l2
            l2 = l2.next
        }
        temp = temp.next
    }
    return head.next
}

function ListNode(val) {
    this.val = val
    this.next = null
}

const lista = new ListNode(1)
lista.next = new ListNode(2)
lista.next.next = new ListNode(4)

const listb = new ListNode(1)
listb.next = new ListNode(3)
listb.next.next = new ListNode(4)

// mergeTwoLists(lista, listb)
mergeTwoLists(null, lista)
