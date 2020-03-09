// 这是简单的递归

function Factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * Factorial(n - 1);
}

// 代码模板
function recursion(level, param1, param2) {
  // recursion terminal
  if (level > MAX_LEVEL) {
    process_result
    return
  }

  // process logic in current level
  process(level, data)

  // drill down
  process(level + 1, param1)
  // reverse the current level status if needed
}
