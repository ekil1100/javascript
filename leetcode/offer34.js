/**
 * https://leetcode-cn.com/problems/er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof/
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
const pathSum = function(root, target) {
    const sum = (root, target, path, res) => {
        if (!root) return res
        path.push(root.val)
        if (!root.left && !root.right) {
            const temp = path.reduce((acc, cur) => acc + cur)
            if (temp === target) {
                res.push(Array.from(path))
            }
        }
        else {
            if (root.left) sum(root.left, target, path, res)
            if (root.right) sum(root.right, target, path, res)
        }

        path.pop()
        return res
    }

    return sum(root, target, [], [])
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

const tree = new TreeNode(5)
tree.left = new TreeNode(4)
tree.left.left = new TreeNode(11)
tree.left.left.left = new TreeNode(7)
tree.left.left.right = new TreeNode(2)
tree.right = new TreeNode(8)
tree.right.left = new TreeNode(13)
tree.right.right = new TreeNode(4)
tree.right.right.right = new TreeNode(1)
tree.right.right.left = new TreeNode(5)

pathSum(tree, 22)
