import { expect, test } from 'vitest'
import { quickSort } from './sort'

test('quick sort', () => {
    expect(quickSort([10, 5, 6, 4, 5, 6, 73, 2, 5, 7, 8, 9])).toStrictEqual([2, 4, 5, 5, 5, 6, 6, 7, 8, 9, 10, 73])
})
