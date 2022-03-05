/**
 * https://leetcode-cn.com/problems/qing-wa-tiao-tai-jie-wen-ti-lcof/
 * @param {number} n
 * @return {number}
 */
const numWays = function(n) {
    if (n < 2) return 1
    let a = 1
    let b = 1
    let c = 2
    for (let i = 3; i <= n; i++) {
        a = b
        b = c
        c = (a + b) % 1000000007
    }
    return c
}

numWays(90)
