/**
 * https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = function(nums, target) {
//     const map = new Map()
//     for (let i = 0; i < nums.length; i++) {
//         const remain = target - nums[i]
//         if (map.has(remain) && i !== map.get(remain)) {
//             return [remain, nums[i]]
//         }
//         map.set(nums[i], i)
//     }
// }
const twoSum = function(nums, target) {
    let i = 0
    let j = nums.length - 1
    while (i < j) {
        const sum = nums[i] + nums[j]
        if (sum > target) {
            j -= 1
        }
        else if (sum < target) {
            i += 1
        }
        else {
            return [nums[i], nums[j]]
        }
    }
}

twoSum([2, 7, 11, 15], 9)
