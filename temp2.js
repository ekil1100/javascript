function flatArray(arr, depth) {
  if (depth === 0) {
    return arr
  }
  return arr.reduce(function (acc, val) {
    if (Array.isArray(val)) {
      acc.push(flatArray(val, depth - 1))
    } else {
      acc.push(val)
    }
    return acc
  }, [])
}
