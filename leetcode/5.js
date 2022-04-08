/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = function(s) {
    const rev = s.split('').reverse()
        .join('')
    let temp = ''
    let max = ''
    for (let i = 0; i < s.length; i++) {
        if (rev[i] === s[i]) {
            temp += s[i]
        }
        else {
            temp = s[i]
        }
        if (temp.length > max.length) {
            max = temp // ?
        }
    }
    return temp.length > max.length ? temp : max
}

// TODO
longestPalindrome('acab') // ?
