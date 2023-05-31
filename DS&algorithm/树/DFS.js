const { bt } = require('./bt');

const preOrder = (root) => {
  if (!root) {
    return
  }
  let res = []
  res.push(root.value)

  const left = preOrder(root.left)
  const right = preOrder(root.right)

  if (Array.isArray(left) && left.length) {
    res = res.concat(left)
  }
  if (Array.isArray(right) && right.length) {
    res = res.concat(right)
  }
  return res
}

const inOrder = (root) => {
  if (!root) {
    return
  }
  let res = []

  const left = inOrder(root.left)
  const right = inOrder(root.right)

  if (Array.isArray(left) && left.length) {
    res = res.concat(left)
  }
  res.push(root.value)
  if (Array.isArray(right) && right.length) {
    res = res.concat(right)
  }
  return res
}

const postOrder = (root) => {
  if (!root) {
    return
  }
  let res = []

  const left = postOrder(root.left)
  const right = postOrder(root.right)

  if (Array.isArray(left) && left.length) {
    res = res.concat(left)
  }
  if (Array.isArray(right) && right.length) {
    res = res.concat(right)
  }
  res.push(root.value)
  return res
}

const preOderIteration = (root) => {
  if (!root) {
    return
  }
  const res = []
  const stack = [root]

  while (stack.length) {
    const node = stack.pop()
    res.push(node.value)
    if (node.right) {
      stack.push(node.right)
    }
    if (node.left) {
      stack.push(node.left)
    }
  }

  // while (stack.length) {
  //   const top = stack[stack.length - 1]
  //   if (top.left) {
  //     res.push(top.left.value)
  //     stack.push(top.left)
  //   } else if (top.right) {
  //     stack.push(top.right)
  //   }
  // }
  return res
}


// const inOderIteration = (root) => {
//   if (!root) {
//     return
//   }
//   const res = []
//   const stack = [root]
//   let p = root

//   while (stack.length || p) {
//     while (p) {
//       if (p.left) {
//         stack.push(p.left)
//       }
//       p = p.left
//     }
//     p = stack.pop()
//     res.push(p.value)
//     if (p.right) {
//       stack.push(p.right)
//       p = p.right
//     } else {
//       p = null
//     }
//   }
//   return res
// }

const inOderIteration = (root) => {
  if (!root) {
    return
  }
  const res = []
  const stack = []
  let p = root

  while (stack.length || p) {
    while (p) {
      stack.push(p)
      p = p.left
    }
    p = stack.pop()
    res.push(p.value)
    p = p.right
  }
  return res
}


const postOderIteration = (root) => {
  if (!root) {
    return
  }
  const res = []
  const stack = [root]

  // 根右左
  while (stack.length) {
    const node = stack.pop()
    res.push(node.value)
    if (node.left) {
      stack.push(node.left)
    }
    if (node.right) {
      stack.push(node.right)
    }
  }
  // 逆转res
  return res.reverse()
}



console.log(preOrder(bt))
console.log(inOrder(bt))
console.log(postOrder(bt))

console.log('---------------------------')

console.log(preOderIteration(bt))
console.log(inOderIteration(bt))
console.log(postOderIteration(bt))



