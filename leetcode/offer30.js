/**
 * initialize your data structure here.
 */
const MinStack = function() {
  this._min = []
  this.stack = []
  this._top = undefined
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  if (this._top === undefined) {
    this._min.push(x)
  }
  else {
    if (x < this._min[this._min.length - 1]) {
      this._min.push(x)
    }
    else {
      this._min.push(this._min[this._min.length - 1])
    }
  }
  this._top = x
  this.stack.push(x)
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this._min.pop()
  this._top = this.stack[this.stack.length - 2]
  return this.stack.pop()
}

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this._top
}

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return this._min[this._min.length - 1]
}

const obj = new MinStack()
obj.push(-2)
obj.push(0)
obj.push(-1)
obj.min()
obj.top()
obj.pop()
obj.min()
