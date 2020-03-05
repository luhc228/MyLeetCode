var preorder = function(root) {
  if (root) {
    traverse.path.push(root.val);
    preorder(root.left);
    preorder(root.right);
  }
}

var inorder = function(root) {
  if (root) {
    inorder(root.left);
    traverse.path.push(root.val);
    inorder(root.right);
  }
}

var postorder = function(root) {
  if (root) {
    postorder(root.left);
    postorder(root.right);
    traverse.path.push(root.val);
  }
}