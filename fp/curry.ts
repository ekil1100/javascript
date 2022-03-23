import { F } from 'ts-toolbelt'

export function curry<Fn extends F.Function>(fn: Fn): F.Curry<Fn> {
    return (...args) => {
        if (args.length < fn.length) {
            return curry(fn.bind(null, ...args))
        }
        else {
            return fn(...args)
        }
    }
}
