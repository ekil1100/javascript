/**
 * https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/
 * @param {number[]} numbers
 * @return {number}
 */
const minArray = function(numbers) {
    let l = 0
    let r = numbers.length - 1
    while (l < r) {
        const m = Math.floor((l + r) / 2)
        if (numbers[m] > numbers[r]) {
            l = m + 1
        }
        else if (numbers[m] < numbers[r]) {
            r = m
        }
        else {
            r--
        }
    }
    return numbers[l]
}

// minArray([2, 2, 2, 0, 1])
// minArray([3, 4, 5, 1, 2])
// minArray([3, 4, 5])
// minArray([5, 3])
// minArray([3, 1, 3])
minArray([3, 3, 1, 3])
