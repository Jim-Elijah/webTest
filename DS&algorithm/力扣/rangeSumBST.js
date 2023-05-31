// var rangeSumBST = function (root, low, high) {
//   let p = root
//   let stack = [], res = 0
//   while (stack.length || p) {
//       if (p) {
//           stack.push(p)
//           p = p.left
//       }
//       else {
//           let n = stack.pop()
//           if(n.val >= low && n.val <= high){
//               res += n.val
//           }
//           if(n.val > high){
//               return res
//           }
//           if(n.right){
//               p = n.right
//           }
//       }
//   }
//   return res
// };

var rangeSumBST_DFS = function (root, low, high) {
  let p = root
  let stack = [], res = 0
  while (stack.length || p) {
    if (p) {
      if (p.val < low) {
        p = p.right
      }
      else if (p.val > high) {
        p = p.left
      }
      else {
        // 栈中只保存在[low, high]之中的元素
        stack.push(p)
        p = p.left
      }
    }
    else {
      let n = stack.pop()
      res += n.val
      p = n.right
    }
  }
  return res
};