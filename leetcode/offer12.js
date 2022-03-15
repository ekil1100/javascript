/**
 * https://leetcode-cn.com/problems/ju-zhen-zhong-de-lu-jing-lcof/
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
const exist = function(board, word) {
    const bound = (x, y) => ([i, j]) => {
        if (i < 0 || j < 0 || i > y || j > x) {
            return false
        }
        else {
            return true
        }
    }

    const inBound = bound(board[0].length - 1, board.length - 1)

    const findPath = (board, word, step, coordinate) => {
        const [i, j] = coordinate

        if (!inBound(coordinate) || board[i][j] !== word[step]) return false
        if (step === word.length - 1) return true

        board[i][j] = ''

        const res = findPath(board, word, step + 1, [i + 1, j]) ||
            findPath(board, word, step + 1, [i - 1, j]) ||
            findPath(board, word, step + 1, [i, j + 1]) ||
            findPath(board, word, step + 1, [i, j - 1])

        board[i][j] = word[step]

        return res
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (findPath(board, word, 0, [i, j])) {
                return true
            }
        }
    }

    return false
}

exist([['a']], 'a') // ?
exist([['A', 'B', 'C', 'E'], ['S', 'F', 'C', 'S'], ['A', 'D', 'E', 'E']], 'ABCCED') // ?
exist([['A', 'B', 'C', 'E'], ['S', 'F', 'E', 'S'], ['A', 'D', 'E', 'E']], 'ABCEFSADEESE') // ?
