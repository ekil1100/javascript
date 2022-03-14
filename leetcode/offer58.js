/**
 * https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/
 * @param {string} s
 * @return {string}
 */
const reverseWords = function(s) {
    return s.split(' ')
        .filter(x => x)
        .reverse()
        .join(' ')
}

reverseWords(' the sky  is blue.    ')
