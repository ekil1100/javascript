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

const defaultCallback = <T>(node: LinkedListNode<T>) => `${node.value}`

export const toString = curry(
    <T>(cb: (node: LinkedListNode<T>) => string, node: LinkedListNode<T>): string => {
        return node ? cb(node) : 'null'
    },
)

export const toPrint = toString(defaultCallback)
