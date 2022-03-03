/**
 * https://leetcode-cn.com/problems/shu-de-zi-jie-gou-lcof/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} A
 * @param {TreeNode} B
 * @return {boolean}
 */
const isSubStructure = function(A, B) {
    function equal(A, B) {
        if (!B) return true
        if (!A) return false
        if (A.val !== B.val) return false
        return equal(A.left, B.left) && equal(A.right, B.right)
    }

    return !!A && !!B && (equal(A, B) || isSubStructure(A.left, B) || isSubStructure(A.right, B))
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

const B = new TreeNode(4)
B.left = new TreeNode(1)

isSubStructure(A, null)
