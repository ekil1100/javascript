/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
const getLeastNumbers = function(arr, k) {
    if (!arr?.length || k === 0) return []
    return qs(arr, 0, arr.length - 1, k)
}

function qs(arr, left, right, k) {
    if (left >= right) return arr
    const pivot = arr[(left + right) >> 1]
    let i = left
    let j = right
    while (i <= j) {
        while (arr[i] < pivot) {
            i++
        }

        while (arr[j] > pivot) {
            j--
        }

        if (i <= j) {
            const temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
            i++
            j--
        }
    }
    if (k < i) return qs(arr, left, i - 1, k)
    if (k > i) return qs(arr, i, right, k)
    return arr.slice(0, k)
}

getLeastNumbers([0, 1, 2, 1], 0)
