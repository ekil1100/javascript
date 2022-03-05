/**
 * https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof/
 * @param {number[][]} grid
 * @return {number}
 */
const maxValue = function(grid) {
    let x, y
    for (x = 0; x < grid.length; x++) {
        for (y = 0; y < grid[x].length; y++) {
            grid[x][y] += Math.max(x !== 0 ? grid[x - 1][y] : 0, y !== 0 ? grid[x][y - 1] : 0)
        }
    }
    return grid[x - 1][y - 1]
}

maxValue([
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
])
