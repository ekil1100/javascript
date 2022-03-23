import { expect, test } from 'vitest'
import { compose } from './compose'

test('compose', () => {
    const fn = (x: number) => x + 1
    const fn2 = (x: number) => x * 2
    const comp = compose(fn2, fn)
    const result = comp('3')
    expect(result).toBe(8)
})
