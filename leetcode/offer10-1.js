/**
 * https://leetcode-cn.com/problems/fei-bo-na-qi-shu-lie-lcof/
 * @param {number} n
 * @return {number}
 */
const fib = function(n) {
    if (n < 2) return n
    let a = 0
    let b = 0
    let c = 1
    for (let i = 2; i <= n; i++) {
        a = b
        b = c
        c = (a + b) % 1000000007
    }
    return c
}

fib(2)
fib(3)
fib(4)
