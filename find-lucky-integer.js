function findLucky(arr) {
  let map = new Map()
  let luckyNum = 0
  arr.forEach((v, i) => {
    if (map[v]) map[v]++
    else map[v] = 1
  })
  Object.entries(map).forEach(([k, v]) => {
    console.log(v, k)
    if (v === parseInt(k) && v > luckyNum) luckyNum = v
  })
  return luckyNum // ?
}

findLucky([1, 2, 2, 3, 3, 3]) // ?
