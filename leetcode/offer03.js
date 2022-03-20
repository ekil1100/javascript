// https://leetcode-cn.com/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/
/**
 * @param {number[]} nums
 * @return {number}
 */
const findRepeatNumber = function(nums) {
    const set = new Set()
    for (const n of nums) {
        if (set.has(n)) return n
        else set.add(n)
    }
}

findRepeatNumber([2, 3, 1, 0, 2, 5, 3])
