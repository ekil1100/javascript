const compose = (...fns) => arg => fns.reduceRight((acc, fn) => fn(acc), arg)

const add2 = x => x + 2
const mul3 = x => x * 3

compose(add2, mul3)(2)
