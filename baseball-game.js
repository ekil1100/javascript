const calPoints = function(ops) {
  const points = []
  for (let i = 0; i < ops.length; i++) {
    if (ops[i] === 'C') {
      points.pop()
    }
    else if (ops[i] === 'D') {
      points.push(points[points.length - 1] * 2)
    }
    else if (ops[i] === '+') {
      points.push(points[points.length - 1] + points[points.length - 2])
    }
    else {
      points.push(parseInt(ops[i]))
    }
  }
  return points.reduce((a, b) => a + b, 0)
}

calPoints({})
