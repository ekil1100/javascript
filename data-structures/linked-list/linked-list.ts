import type { LinkedListNode } from './linked-list-node'
import * as lln from './linked-list-node'

export interface LinkedList<T> {
    head: LinkedListNode<T> | null;
    tail: LinkedListNode<T> | null;
    length: number;
}

export function create<T>(value?: T): LinkedList<T> {
    if (value) {
        const node = lln.create(value)
        return {
            head: node,
            tail: node,
            length: 1,
        }
    }
    else {
        return {
            head: null,
            tail: null,
            length: 0,
        }
    }
}

export function prepend<T>(value: T, list: LinkedList<T>): LinkedList<T> {
    const node = lln.create(value)

    if (list.head) {
        node.next = list.head
        list.head = node
    }

    list.length += 1

    return list
}

export function toString<T>(cb: (node?: LinkedListNode<T>) => string, list: LinkedList<T>): string {
    if (!list) {
        return 'null'
    }
    return ''
}
