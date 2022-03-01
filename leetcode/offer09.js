// https://leetcode-cn.com/problems/yong-liang-ge-zhan-shi-xian-dui-lie-lcof/

const CQueue = function() {
    this.stack1 = []
    this.stack2 = []
}

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack1.push(value)
}

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.stack1.length === 0 && this.stack2.length === 0) {
        return -1
    }

    if (this.stack2.length > 0) {
        return this.stack2.pop()
    }

    while (this.stack1.length > 0) {
        this.stack2.push(this.stack1.pop())
        console.log(this.stack2)
    }

    return this.stack2.pop()
}

const obj = new CQueue()
obj.appendTail(5)
obj.appendTail(2)
obj.deleteHead()
