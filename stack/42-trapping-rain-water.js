/**
 * 方法一：使用栈
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  const stack = [];
  let ans = 0, current = 0;
  while (current < height.length) {
    while (stack.length && height[current] > height[getStackTop(stack)]) {
      // 获取当前栈顶元素并出栈
      const top = stack.pop();
      if (!stack.length)
        break;
      const distance = current - getStackTop(stack) - 1;
      const bounded_height = Math.min(height[current], height[getStackTop(stack)]) - height[top];
      ans += distance * bounded_height;
    }
    stack.push(current++);
  }
  return ans;
};

function getStackTop(stack) {
  return stack[stack.length - 1]
}