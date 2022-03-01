/**
 * https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
const levelOrder = function(root) {
    const res = []
    const que = [root]
    let fromLeft = true
    if (!root) return res
    while (que.length !== 0) {
        const temp = []
        const len = que.length
        for (let i = 0; i < len; i++) {
            const node = que.shift()
            if (fromLeft) temp.push(node.val)
            else temp.unshift(node.val)
            if (node.left) que.push(node.left)
            if (node.right) que.push(node.right)
        }
        res.push(temp)
        fromLeft = !fromLeft
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

const tree3 = new TreeNode(1)
tree3.left = new TreeNode(2)
tree3.right = new TreeNode(3)
tree3.left.left = new TreeNode(4)
tree3.left.right = new TreeNode(5)
tree3.right.left = new TreeNode(6)
tree3.right.right = new TreeNode(7)

levelOrder(tree3)
