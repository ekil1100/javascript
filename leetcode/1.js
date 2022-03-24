/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
// const twoSum = function(nums, target) {
//     const sorted = nums.sort((a, b) => a - b)
//     let i = 0
//     let j = nums.length - 1
//     while (i < j) {
//         if (sorted[i] + sorted[j] > target) {
//             j--
//         }
//         else if (sorted[i] + sorted[j] < target) {
//             i--
//         }
//         else {
//             return [i, j]
//         }
//     }

//     return []
// }
const twoSum = function(nums, target) {
    const map = new Map()
    let i = 0
    for (const x of nums) {
        if (map.has(target - x)) {
            return [map.get(target - x), i]
        }
        else {
            map.set(x, i)
        }
        i++
    }
}

twoSum([2, 7, 11, 15], 9) // ?
