function getCommonPrefix(strs) {
    let prefix = ''
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i] // ?
        if (str.length === 0) {
            return prefix
        }
        if (prefix.length === 0) {
            prefix = str
            continue
        }
        console.log(prefix)
        let j = 0
        while (j < prefix.length && j < str.length && prefix[j] === str[j]) {
            j++
        }
        prefix = prefix.substring(0, j)
        if (!prefix) return prefix
    }
    return prefix
}
