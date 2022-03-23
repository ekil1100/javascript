/**
 * @param {string} s
 * @return {string}
 */
const replaceSpace = function(s) {
    return s
        .split('')
        .map(x => (x === ' ' ? '%20' : x))
        .join('')
}

replaceSpace('a fa fa')
