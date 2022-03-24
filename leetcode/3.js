/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let i = 0
    let j = 0
    const set = new Set()
    let max = 0
    while (j < s.length) {
        if (set.has(s[j])) {
            set.delete(s[i])
            i++
        }
        else {
            set.add(s[j])
            j++
        }
        max = Math.max(max, j - i)
    }
    return max
}

lengthOfLongestSubstring('aabbbc') // ?
