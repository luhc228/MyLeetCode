/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 递归办法 反人类
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root, min, max) {
  // console.log(root);
  // console.log(min);
  // console.log(max);
  if (root === null) return true;
  if (min !== null && root.val <= min) return false;
  if (max !== null && root.val >= max) return false;
  
  return isValidBST(root.left, min, root.val) && 
      isValidBST(root.right, root.val, max)
};

// 中序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  // 
  let inOrderArr = inOrder(root);
  inOrderArr = Array.from(inOrderArr);
  // 去重
  let sortedInOrder = new Set(inOrderArr);
  
  sortedInOrder = Array.from(sortedInOrder).sort(compare);
  return inOrderArr.join('') === sortedInOrder.join('');
};

var inOrder = function(root) {
  if (root === null) {
      return []
  };
  return inOrder(root.left).concat([root.val], inOrder(root.right));
}

var compare = function(a, b) {
  if (a > b) {
      return 1;
  } else if (a < b) {
      return -1;
  } else {
      return 0;
  }
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  var pre = null;
  return helper(root);
};

var helper = function(root) {
  if (root === null) {
      return true;
  }
  
  if (!helper(root.left)) {
      return false;
  }
  // 递增 若不是递增的数列 报错
  if (this.pre && this.pre.val >= root.val) {
      return false;
  }
  
  this.pre = root;
  return helper(root.right);
}
