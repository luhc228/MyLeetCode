// 这是简单的递归

function Factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * Factorial(n - 1);
}

// 代码模板
function recursion(level, param1, param2) {
  // 先写上递归终止条件
  if (level > MAX_LEVEL) {
    process_result;
    return;
  }

  // 完成逻辑代码 处理当前层逻辑
  process(level, data);

  // 下到下一层
  recursion(level + 1, p1);

  // 清理当前层的状态
}
