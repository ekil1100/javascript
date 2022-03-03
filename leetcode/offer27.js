/**
 * https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
const mirrorTree = function(root) {
    if (!root) return null
    const newRoot = new TreeNode(root.val)
    newRoot.left = mirrorTree(root.right)
    newRoot.right = mirrorTree(root.left)
    return newRoot
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

mirrorTree(A)
