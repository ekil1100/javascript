/**
 * https://leetcode-cn.com/problems/ba-shu-zi-fan-yi-cheng-zi-fu-chuan-lcof/
 * @param {number} num
 * @return {number}
 */
// const translateNum = function(num) {
//     const str = num.toString().split('')
//     let f1 = 1
//     let f2 = 1
//     let f = 1
//     for (let i = 1; i < str.length; i++) {
//         const n = parseInt(str[i - 1] + str[i])
//         if (n > 9 && n < 26) {
//             f = f1 + f2
//         }
//         else {
//             f = f1
//         }
//         f2 = f1
//         f1 = f
//     }
//     return f
// }

const translateNum = function(num) {
    let fn1 = 1
    let fn2 = 1
    let fn = 1
    let n2 = num % 10
    let n1
    let n
    while (num !== 0) {
        num = parseInt(num / 10)
        n1 = num % 10
        n = n1 * 10 + n2
        if (n > 9 && n < 26) fn = fn1 + fn2
        else fn = fn1
        fn2 = fn1
        fn1 = fn
        n2 = n1
    }
    return fn
}

translateNum(25)
