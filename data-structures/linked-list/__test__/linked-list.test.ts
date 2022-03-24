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

    test.skip('toString')
})
