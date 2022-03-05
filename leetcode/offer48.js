/**
 * https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function(s) {
    let n, sub
    n = 0
    sub = ''
    for (let i = 0; i < s.length; i++) {
        const c = s.charAt(i)
        sub = sub.slice(sub.indexOf(c) + 1)
        sub += c
        n = Math.max(n, sub.length)
    }
    return n
}

lengthOfLongestSubstring('abcabcbb')
const a = 'ab'
a.slice(a.indexOf(a))
