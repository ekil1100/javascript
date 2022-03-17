/**
 * https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {number}
 */
// const kthLargest = function(root, k) {
//     const res = []
//     const dfs = (root) => {
//         if (!root) return null
//         dfs(root.right)
//         res.push(root.val)
//         dfs(root.left)
//     }
//     dfs(root)
//     return res[k - 1]
// }

const kthLargest = function(root, k) {
    let res = null
    const dfs = (root) => {
        if (!root) return
        dfs(root.right)
        if (k === 0) return
        k -= 1
        if (k === 0) res = root.val
        dfs(root.left)
    }
    dfs(root)
    return res
}

function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

// const tree = new TreeNode(3)
// tree.left = new TreeNode(1)
// tree.right = new TreeNode(4)
// tree.left.right = new TreeNode(2)
const tree = new TreeNode(5)

tree.left = new TreeNode(3)
tree.right = new TreeNode(6)

tree.left.left = new TreeNode(2)
tree.left.right = new TreeNode(4)

tree.left.left.left = new TreeNode(1)

kthLargest(tree, 1)
