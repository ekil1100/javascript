function nonOverlapping(intervals) {
  let result = []
  let prev = intervals[0]
  for (let i = 1; i < intervals.length; i++) {
    let curr = intervals[i]
    if (curr[0] > prev[1]) {
      result.push(prev)
      prev = curr
    } else {
      prev[1] = Math.max(prev[1], curr[1])
    }
  }
  result.push(prev)
  return result
}
