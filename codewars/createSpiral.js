// https://www.codewars.com/kata/536a155256eb459b8700077e/javascript
function createSpiral(n) {
    if (!Number.isInteger(n) || n < 1) return []
    const spiral = Array.from({ length: n }, () => Array.from({ length: n }))
    let i = 0
    let j = 0
    let start = 0
    let end = n - 1
    let num = 1
    let step = n * n

    while (step--) {
        spiral[i][j] = num
        num++

        if (i === start && j < end) {
            j++
        }
        else if (i < end && j === end) {
            i++
        }
        else if (i === end && j === end) {
            j--
        }
        else if (i === end && j > start) {
            j--
        }
        else if (i > n - end && j === start) {
            i--
        }
        else if (i === n - end && j === start) {
            end--
            start++
            j++
        }
        else {
            throw new Error(`edge case: n = ${n}, i = ${i}, j = ${j}, start = ${start}, end = ${end}`)
        }
    }

    return spiral
}

createSpiral(2)
