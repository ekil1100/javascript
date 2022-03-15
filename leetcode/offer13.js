/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
const movingCount = function(m, n, k) {
    const inBound = ([i, j]) => {
        if (i < 0 || j < 0 || i > m - 1 || j > n - 1) {
            return false
        }
        else {
            return true
        }
    }

    const sum = ([i, j]) => {
        let s = 0
        while (i !== 0) {
            s += i % 10
            i = Math.floor(i / 10)
        }
        while (j !== 0) {
            s += j % 10
            j = Math.floor(j / 10)
        }
        return s
    }

    const res = (k, coor, visited) => {
        if (!inBound(coor)) return 0
        if (sum(coor) > k) return 0
        if (visited.has(coor.toString())) return 0
        const [i, j] = coor
        visited.add(coor.toString())
        const down = res(k, [i + 1, j], visited)
        const up = res(k, [i, j + 1], visited)
        return 1 + down + up
    }

    return res(k, [0, 0], new Set())
}

movingCount(2, 3, 1) // ?
// movingCount(3, 1, 0) // ?
