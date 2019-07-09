const recursion = (level, param1, param2) => {

  // recursion terminator
  if (level > Max_LEVEL) {
    console.log("your result");
    return;
  }

  // process logic in current level
  prcess_data(level, data)

  // drill down
  recursion(level + 1, p1);

  // reverse the current level status if needed
  reverse_state(level)
}

const recursion = (n) => {
  if (n === 0 || n === 1) {
    return 1;
  }

  return recursion(n - 1) + recursion(n - 2);
}

console.log(recursion(5));
