/**
 * @param {string} s
 * @return {string}
 */
let replaceSpace = function (s) {
  return s
    .split('')
    .map((x) => (x === ' ' ? '%20' : x))
    .join('')
}
