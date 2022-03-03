/**
 * https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
const isSymmetric = function(root) {
    if (!root) return true
    const equal = (A, B) => {
        if (!A && !B) return true
        if (!A || !B) return false
        if (A.val !== B.val) return false
        return equal(A.right, B.left) && equal(A.left, B.right)
    }
    return equal(root.left, root.right)
}

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

const A = new TreeNode(3)
A.left = new TreeNode(4)
A.right = new TreeNode(5)
A.left.left = new TreeNode(1)
A.left.right = new TreeNode(2)

isSymmetric(A)
