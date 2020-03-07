function TreeNode(val) {
  this.val = val
  this.left = null
  this.right = null
}

// 前序遍历
function preOrderVisit(root) {
  if (root) {
    preOrderVisit(root.val)
    preOrderVisit(root.left)
    preOrderVisit(root.right)
  }
}

// 中序遍历
function midOrderVisit(root) {
  if (root) {
    midOrderVisit(root.left)
    midOrderVisit(root.val)
    midOrderVisit(root.right)
  }
}
// 后序遍历
function postOrderVisit(root) {
  if (root) {
    postOrderVisit(root.left)
    postOrderVisit(root.right)
    postOrderVisit(root.val)
  }
}