import { expect, test } from 'vitest'
import { merge, mergeSort, quickSort } from './sort'

test('quick sort', () => {
    const list = [10, 5, 6, 4, 5, 6, 73, 2, 5, 7, 8, 9]
    expect(quickSort(list)).toStrictEqual([2, 4, 5, 5, 5, 6, 6, 7, 8, 9, 10, 73])
    expect(list).toStrictEqual([10, 5, 6, 4, 5, 6, 73, 2, 5, 7, 8, 9])
})

test('merge sort', () => {
    const list = [10, 5, 6, 4, 5, 6, 73, 2, 5, 7, 8, 9]
    expect(mergeSort(list)).toStrictEqual([2, 4, 5, 5, 5, 6, 6, 7, 8, 9, 10, 73])
    expect(list).toStrictEqual([10, 5, 6, 4, 5, 6, 73, 2, 5, 7, 8, 9])
})

test('merge function', () => {
    const left = [1, 2, 3, 4, 5, 6]
    const right = [7, 8, 9, 10, 11, 12]
    expect(merge(left, right)).toStrictEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12])
})
