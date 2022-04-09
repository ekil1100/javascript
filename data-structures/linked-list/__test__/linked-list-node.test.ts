import { describe, expect, test } from 'vitest'
import { create, toString, toPrint } from '../linked-list-node'

describe('linked-list-node', () => {
    test('create', () => {
        const node = create(1)

        expect(node).toStrictEqual({
            value: 1,
            next: null,
        })
    })

    test('toString', () => {
        const node = create(1)
        const fn1 = toString(node => `${node.value}`)
        const fn2 = toString(() => 'xxx')
        expect(fn1(node)).toBe('1')
        expect(fn2(node)).toBe('xxx')
    })

    test('toPrint', () => {
        const node = create(1)
        expect(toPrint(node)).toBe('1')
    })
})
