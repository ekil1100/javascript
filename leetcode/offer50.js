/**
 * https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/
 * @param {string} s
 * @return {character}
 */
const firstUniqChar = function(s) {
    const map = s.split('').reduce((acc, cur) => {
        if (acc.has(cur)) {
            acc.set(cur, false)
        }
        else {
            acc.set(cur, true)
        }
        return acc
    }, new Map())

    for (const c of s) {
        if (map.get(c)) return c
    }

    return ' '
}

firstUniqChar('abaccdeff')
firstUniqChar('')
