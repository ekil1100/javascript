import { F } from 'ts-toolbelt'

export function compose<Fn extends F.Function>(...fns: Fn[]) {
    return <T>(input: T) => fns.reduceRight((acc, fn) => fn(acc), input)
}
