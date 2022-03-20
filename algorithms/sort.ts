type List = Elem[]
type Elem = number | string

/**
 * Sort a list using merge sort.
 * @param {List} list - The list to be sorted.
 * @returns The sorted list.
 */
export function sort(list: List) {
    return mergeSort(list)
}

/**
 * It sorts the list using the quick sort algorithm.
 * @param {List} list - the list to sort
 * @returns Nothing.
 */
export function quickSort(list: List) {
    return quickSortFn(Array.from(list), 0, list.length - 1)
}

function quickSortFn(list: List, left: number, right: number) {
    if (left >= right) return list
    const pivot = list[(left + right) >> 1]
    const index = partition(list, left, right, pivot)
    list = quickSortFn(list, left, index - 1)
    list = quickSortFn(list, index, right)
    return list
}

function partition(list: List, left: number, right: number, pivot: Elem) {
    while (left <= right) {
        while (list[left] < pivot) {
            left++
        }

        while (list[right] > pivot) {
            right--
        }

        if (left <= right) {
            list = swap(list, left, right)
            left++
            right--
        }
    }
    return left
}

function swap(list: List, left: number, right: number) {
    const temp = list[left]
    list[left] = list[right]
    list[right] = temp
    return list
}

/**
 * Merge sort is a divide and conquer algorithm that works by recursively dividing the input list into
 * two lists, sorting each of them, and then merging the two sorted lists
 * @param {List} list - The list to be sorted.
 * @returns The merged list.
 */
export function mergeSort(list: List): List {
    if (list.length < 2) return list
    const mid = list.length >> 1
    const leftList = list.slice(0, mid)
    const rightList = list.slice(mid, list.length)
    return merge(mergeSort(leftList), mergeSort(rightList))
}

/**
 * Merge two sorted lists into a single sorted list
 * @param {List} left - The left side of the list.
 * @param {List} right - The right list to merge with the left list.
 * @returns The merged list.
 */
export function merge(left: List, right: List): List {
    const temp = []
    let i = 0
    let j = 0
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            temp.push(left[i])
            i++
        }
        else {
            temp.push(right[j])
            j++
        }
    }
    return temp.concat(left.slice(i)).concat(right.slice(j))
}
