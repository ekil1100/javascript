import { from } from 'rxjs'
import { last } from 'rxjs/operators'

const source = from(['x', 'y', 'z'])
const example = source.pipe(last())
console.log(1)
example.subscribe(val => console.log(`Last alphabet: ${val}`))
console.log(2)
