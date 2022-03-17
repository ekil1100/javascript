/**
 * @param {number[]} nums
 * @return {string}
 */
const minNumber = function(nums) {
    if (!nums?.length) return 0
    return nums.map(x => x.toString())
        .sort((a, b) => {
            if (a + b > b + a) {
                return 1
            }
            else {
                return -1
            }
        })
        .join('')
}

// minNumber([10, 2])
minNumber([3, 30, 34, 5, 9]) // ?
