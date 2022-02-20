;['1', '2', '3'].map(parseInt)

var name = 'ok!'
;(function () {
  if (typeof name === 'undefined') {
    var name = 'Jack'
    console.log('Hi ' + name)
  } else {
    console.log('Hello ' + name)
  }
})()

var val = 'smtg'
console.log('Value is ' + (val === 'smtg') ? 'Something' : 'Nothing')
