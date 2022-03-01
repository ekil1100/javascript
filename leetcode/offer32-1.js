/**
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const levelOrder = function(root) {
    const res = []
    if (!root) return res
    const queue = [root]
    while (queue.length !== 0) {
        const node = queue.shift()
        res.push(node.val)
        if (node.left) queue.push(node.left)
        if (node.right) queue.push(node.right)
    }
    return res
}

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

const tree = new TreeNode(3)
tree.left = new TreeNode(9)
tree.right = new TreeNode(20)
tree.right.left = new TreeNode(15)
tree.right.right = new TreeNode(7)

levelOrder(tree)

const tree2 = new TreeNode(1)
tree2.left = new TreeNode(2)
tree2.right = new TreeNode(3)
tree2.left.left = new TreeNode(4)
tree2.left.right = new TreeNode(5)

levelOrder(tree2)
