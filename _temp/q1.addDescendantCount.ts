type TreeNode = {
  id: number
  descendantCount?: number
  children: TreeNode[]
}

function addDescendantCount(root: TreeNode): TreeNode {
  if (root.children.length === 0) {
    root.descendantCount = 0
  } else {
    root.descendantCount = 0
    for (let child of root.children) {
      addDescendantCount(child)
      root.descendantCount += child.descendantCount + 1
    }
  }
  return root
}
