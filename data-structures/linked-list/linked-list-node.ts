import { curry } from '../../fp/curry'

export interface LinkedListNode<T> {
    value: T;
    next: LinkedListNode<T> | null;
}

export function create<T>(value: T): LinkedListNode<T> {
    return {
        value,
        next: null,
    }
}

export const toString = curry(
    function<T>(cb: (node: LinkedListNode<T>) => string,
        node: LinkedListNode<T>): string {
        if (!node) {
            return 'null'
        }
        return cb(node)
    })

export const toPrint = toString(node => `${node.value}`)
