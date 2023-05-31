const { bt, root } = require('./bt');

const BFS = (root) => {
  if (!root) {
    return
  }
  const res = []
  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    res.push(node.value)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
  return res
}

console.log(BFS(bt))
console.log(BFS(root))
