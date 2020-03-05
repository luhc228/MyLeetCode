/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (root === null) {
      return [];
  }
  
  let result = [];
  let queue = [];
  queue.push(root);
  
  let visited = new Set([root]);
  
  while (!!queue.length) {
      levelSize = queue.length;
      let currentLevel = [];
      
      for (i = 0; i < levelSize; i++) {
          node = queue.shift();
          visited.add(node);
          currentLevel.push(node.val);
          if (node.left !== null && !visited.has(node.left)) {
              queue.push(node.left);
          }
          if (node.right !== null && !visited.has(node.right)) {
              queue.push(node.right);
          }
      }
      
      result.push(currentLevel);
  }

  return result;
};


