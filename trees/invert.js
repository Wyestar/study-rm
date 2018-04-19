function invertBT(tree) {
  // tree left/right null check?

  let leftTree = tree.left
  tree.left = tree.right
  tree.right = leftTree

  invertBT(tree.left)
  invertBT(tree.right)
}
