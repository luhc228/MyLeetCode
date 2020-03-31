/**
 * 方法一：使用两个栈来维护数据 一个栈用来存放数据，另一个栈是用来存放最小值
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = []
  this.minStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stack.push(x)

  if (this.minStack.length === 0 || this.minStack[this.minStack.length - 1] >= x) {
    this.minStack.push(x)
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const x = this.stack.pop()
  if (this.minStack.length !== 0 && this.minStack[this.minStack.length - 1] === x) {
    this.minStack.pop()
  }
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.minStack[this.minStack.length - 1]
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */