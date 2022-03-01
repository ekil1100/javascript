// https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
// var missingNumber = function (nums) {
//   let sum = nums.reduce((a, b) => a + b, 0)
//   let n = nums.length
//   return (n * (n + 1)) / 2 - sum
// }

const missingNumber = function(nums) {
    let l = 0
    let r = nums.length - 1
    while (l <= r) {
        const m = Math.floor((l + r) / 2)
        if (nums[m] === m) {
            l = m + 1
        }
        else {
            r = m - 1
        }
    }
    return l
}

missingNumber([0, 1, 2, 3, 4, 5, 6, 7, 9])
