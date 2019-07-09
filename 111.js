/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
  if (root === null) {
      return 0;
  }
  
  let depth = 0;
  // 创建队列
  let queue = [];
  let breaked = false;
  queue.push(root);
  while(!!queue.length && !breaked) {

      let levelSize = queue.length;
      
      for (i = 0; i < levelSize; i++) {
          let node = queue.shift();
          
          if (node.left !== null) {
              queue.push(node.left);
          }
          if (node.right !== null) {
              queue.push(node.right);
          }
          if (node.right === null && node.left === null) {
              breaked = true;
              break;
          }
      }

      depth += 1;
  }
  
  return depth;
};


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * 深度优先算法
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    
    let left = minDepth(root.left);
    let right = minDepth(root.right);
    
    let result = (left === 0 || right === 0) ? 
                    left + right + 1 : 
                    1 + Math.min(left, right);
    return result;
};
