/**
 * https://leetcode-cn.com/problems/lian-xu-zi-shu-zu-de-zui-da-he-lcof/
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function(nums) {
    let sum = -Infinity
    let cur = 0
    let pre = 0
    for (const n of nums) {
        cur = Math.max(pre, 0) + n
        sum = Math.max(sum, cur)
        pre = cur
    }
    return sum
}

maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])
