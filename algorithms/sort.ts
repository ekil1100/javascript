type List = Elem[]
type Elem = number | string

export function sort(list: List) {
    return quickSort(list)
}

export function quickSort(list: List) {
    return quickSortR(list, 0, list.length - 1)
}

function quickSortR(list: List, left: number, right: number) {
    if (left >= right) return list
    const pivot = list[(left + right) >> 1]
    const index = partition(list, left, right, pivot)
    list = quickSortR(list, left, index - 1)
    list = quickSortR(list, index, right)
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
