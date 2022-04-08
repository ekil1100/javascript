import { test, expect } from 'vitest'
import { curry } from '../curry'

test('curry', () => {
    const fn = (x: number, y: number) => x + y
    const curried = curry(fn)
    expect(curried(3)(4)).toBe(7)
    expect(curried(3, 4)).toBe(7)
})
