/**
 * initialize your data structure here.
 */
const MedianFinder = function() {
    this.list = []
}

/**
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {
    if (this.list.length > 0) {
        for (let i = 0; i < this.list.length; i++) {
            if (this.list[i] > num) {
                this.list.splice(i, 0, num)
                return
            }
        }
    }
    this.list.push(num)
}

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
    const len = this.list.length
    if (len % 2 === 0) {
        return (this.list[len / 2] + this.list[len / 2 - 1]) / 2
    }
    else {
        return this.list[len >> 1]
    }
}

const obj = new MedianFinder()
obj.addNum(-1)
obj.findMedian()// ?
obj.addNum(-2)
obj.findMedian()// ?
obj.addNum(-3)
obj.findMedian()// ?
