// https://leetcode-cn.com/problems/fu-za-lian-biao-de-fu-zhi-lcof

/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
  if (!head) return null
  let map = new Map()
  let cur = head
  while (cur) {
    map.set(cur, new Node(cur.val, null, null))
    cur = cur.next
  }
  cur = head
  while (cur) {
    map.get(cur).next = cur.next ? map.get(cur.next) : null
    map.get(cur).random = cur.random ? map.get(cur.random) : null
    cur = cur.next
  }
  return map.get(head)
}

function Node(val, next, random) {
  this.val = val
  this.next = next
  this.random = random
}
let head = new Node(1, null, null)
head.next = new Node(2, null, null)
head.next.next = new Node(3, null, null) // 2
head.next.next.next = new Node(4, null, null) // 1
head.next.next.next.next = new Node(5, null, null) // 3
head.random = head.next.next.next
head.next.random = head.next.next
head.next.next.random = head.next.next.next.next
head.next.next.next.random = null
head.next.next.next.next.random = head
let res = copyRandomList(head)
console.log(res)
