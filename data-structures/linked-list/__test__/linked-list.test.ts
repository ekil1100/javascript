import { describe, test, expect } from 'vitest'
import * as lln from '../linked-list-node'
import * as ll from '../linked-list'

describe('linked-list', () => {
    test('create', () => {
        const node = lln.create(1)
        const list = ll.create(1)
        const empltyList = ll.create()
        expect(list).toStrictEqual({
            head: node,
            tail: node,
            length: 1,
        })
        expect(empltyList).toStrictEqual({
            head: null,
            tail: null,
            length: 0,
        })
    })

    test('prepend', () => {
        const node = lln.create(1)
        const list = ll.create(1)
        ll.prepend(2)(list)
        expect(list).toStrictEqual({
            head: {
                value: 2,
                next: node,
            },
            tail: node,
            length: 2,
        })
    })

    test('append', () => {
        const list = ll.create(1)
        ll.append(2)(list)
        expect(list).toStrictEqual({
            head: {
                value: 1,
                next: {
                    value: 2,
                    next: null,
                },
            },
            tail: {
                value: 2,
                next: null,
            },
            length: 2,
        })
    })

    test('toString', () => {
        const list = ll.create(1)
        ll.append(2)(list)
        ll.append(3)(list)
        const fn1 = ll.toString(node => `${node.value}`, ' -> ')
        expect(fn1(list)).toBe('1 -> 2 -> 3')
        // @ts-expect-error - this is a test
        expect(fn1(undefined)).toBe('null')
    })

    test('toPrint', () => {
        const list = ll.create(1)
        ll.append(2)(list)
        ll.append(3)(list)
        expect(ll.toPrint(list)).toBe('1 -> 2 -> 3')
    })

    test('toArray', () => {
        const list = ll.create(1)
        ll.append(2)(list)
        ll.append(3)(list)
        expect(ll.toArray(list)).toStrictEqual([1, 2, 3])
        // @ts-expect-error - this is a test
        expect(ll.toArray(undefined)).toStrictEqual([])
    })

    test('each', () => {
        const list = ll.create(1)
        ll.append(2)(list)
        ll.append(3)(list)
        let res: number[] = []
        const f1 = ll.each(node => res.push(node.value as number))
        f1(list)
        expect(res).toStrictEqual([1, 2, 3])
        res = []
        // @ts-expect-error - this is a test
        f1(undefined)
        expect(res).toStrictEqual([])
    })
})
