// https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
    function binarySearch(n) {
        let l = 0
        let r = nums.length - 1
        while (l <= r) {
            const m = Math.floor((l + r) / 2)
            if (nums[m] <= n) {
                l = m + 1
            }
            else {
                r = m - 1
            }
        }
        return r
    }
    return binarySearch(target) - binarySearch(target - 1)
}

search([5, 7, 7, 8, 8, 10, 10], 11)
