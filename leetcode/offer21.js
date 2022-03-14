/**
 * https://leetcode-cn.com/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/
 * @param {number[]} nums
 * @return {number[]}
 */
const exchange = function(nums) {
    let l = 0
    let r = nums.length - 1
    while (l < r) {
        while (l < r && nums[l] % 2 !== 0) {
            l += 1
        }
        while (l < r && nums[r] % 2 === 0) {
            r -= 1
        }
        const temp = nums[l]
        nums[l] = nums[r]
        nums[r] = temp
    }
    return nums
}

const nums = [1, 2, 3, 4]

exchange(nums)
