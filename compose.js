const compose =
  (...fns) =>
  (arg) =>
    fns.reduceRight((acc, fn) => fn(acc), arg)

const add2 = (x) => x + 2
const mul3 = (x) => x * 3

const res = compose(add2, mul3)(2)
console.log(res)
