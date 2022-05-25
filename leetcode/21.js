/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
const mergeTwoLists = function(list1, list2) {
    if (!list1 && !list2) return null
    if (!list1) return list2
    if (!list2) return list1
    const head = new ListNode()
    let temp = head
    while (list1 && list2) {
        if (list1.val < list2.val) {
            temp.next = list1
            list1 = list1.next
        }
        else {
            temp.next = list2
            list2 = list2.next
        }
        temp = temp.next
    }

    if (list1) temp.next = list1
    if (list2) temp.next = list2
    return head.next
}

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

mergeTwoLists()
