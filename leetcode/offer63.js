/**
 * https://leetcode-cn.com/problems/gu-piao-de-zui-da-li-run-lcof/
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
    if (!prices?.length) return 0
    let cost = Infinity
    let profit = 0
    for (const x of prices) {
        cost = Math.min(cost, x)
        profit = Math.max(profit, x - cost)
    }
    return profit
}

maxProfit([7, 1, 5, 3, 6, 4])
// maxProfit([2, 4, 1])
