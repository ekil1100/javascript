// /**
//  * @param {string} s
//  * @return {boolean}
//  * 正则表达式
//  */
// const isValid = function(s) {
//     const regex = /\{\}|\(\)|\[\]/g
//     while (s.match(regex)) {
//         s = s.replace(regex, '')
//     }
//     return s.length === 0
// }

/**
 * @param {string} s
 * @return {boolean}
 * 栈
 */
const isValid = function(s) {
    const stack = []
    const map = new Map([
        [')', '('],
        [']', '['],
        ['}', '{'],
    ])

    for (const c of s) {
        if (map.has(c)) {
            if (!stack.length || stack[stack.length - 1] !== map.get(c)) {
                return false
            }
            stack.pop()
        }
        else {
            stack.push(c)
        }
    }
    return !stack.length
}

isValid('{}') // ?
