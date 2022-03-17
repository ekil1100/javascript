/**
 * @param {number[]} nums
 * @return {boolean}
 */
const isStraight = function(nums) {
    let min = 14
    let max = 0
    const set = new Set()

    for (const x of nums) {
        if (x === 0) continue
        if (set.has(x)) return false
        set.add(x)
        min = Math.min(min, x)
        max = Math.max(max, x)
    }

    if (max - min < 5) return true
    else return false
}

// isStraight([0, 1, 3, 5, 4])
isStraight([0, 0, 2, 2, 5])
