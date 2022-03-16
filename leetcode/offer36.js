/**
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-yu-shuang-xiang-lian-biao-lcof/
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
// const treeToDoublyList = function(root) {
//     if (!root) return root

//     const mtrav = (root, list) => {
//         if (!root) return
//         mtrav(root.left, list)
//         list.push(root)
//         mtrav(root.right, list)
//         return list
//     }

//     const list = mtrav(root, [])

//     const head = list[0]

//     list.forEach((ele, idx, arr) => {
//         const len = arr.length - 1
//         ele.right = arr.at(idx + 1 > len ? 0 : idx + 1)
//         ele.left = arr.at(idx - 1 < 0 ? len : idx - 1)
//     })

//     return head
// }
const treeToDoublyList = function(root) {
    let head = null
    let pre = null

    const inorder = (root) => {
        if (!root) return
        inorder(root.left)
        if (pre) {
            pre.right = root
        }
        else {
            head = root
        }
        root.left = pre
        pre = root
        inorder(root.right)
    }

    if (!root) return head

    inorder(root)

    head.left = pre
    pre.right = head

    return head
}

function Node(val, left, right) {
    this.val = val
    this.left = left
    this.right = right
};

const root = new Node(4)
root.left = new Node(2)
root.right = new Node(5)
root.left.left = new Node(1)
root.left.right = new Node(3)

treeToDoublyList(root)
