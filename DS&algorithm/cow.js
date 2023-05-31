/**
 * 使用二叉树来记录每头牛的出生年份，最后根据n计算存活的头数量
 * 对于某个节点p，p.left.val = p.val+3，p.right.val = p.val+5
 * 不过可以用数组来模拟二叉树，下标从1开始
 */
calExistingNum = (n) => {
  // birth存储每头牛的出生年份，下标从1开始
  // 设置birth第一个元素为-1，以保存小根树小标的性质
  // theLeafest是最左的叶节点的下标，theLeafest为2的幂
  let birth = [-1], i = 1, theLeafest = 0
  // flag为theLeafest正指向下层最左元素的标志，
  let flag = false
  while (flag || birth[theLeafest] < n) {
    let exp2 = isExp2(i + 1)
    if (exp2) {
      theLeafest = i + 1
      flag = true
    }
    else if (!exp2) {
      flag = false
    }
    if (i === 1) {
      birth.push(0)
    }
    // 不是第一个，有父节点 Math.floor(i/2)
    else {
      let p = Math.floor(i / 2)
      // 左孩子
      if (i % 2 === 0) {
        birth.push(birth[p] + 3)
      }
      // 有孩子
      else birth.push(birth[p] + 5)
    }
    i++
  }
  // console.log(birth)
  let alive = birth.filter(val => {
    return val >= n - 5 && val <= n
  })
  return alive.length
}

function isExp2(n) {
  let mod
  while (n !== 1) {
    mod = n % 2
    if (mod !== 0) {
      return false
    }
    n = parseInt(n / 2)
  }
  return true
}

console.log(calExistingNum(4)) // 3
console.log(calExistingNum(8)) // 5
console.log(calExistingNum(10)) // 6
console.log(calExistingNum(13)) // 11
console.log(calExistingNum(15)) // 14


