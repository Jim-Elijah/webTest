var findContentChildren = function (g, s) {
  s.sort((a, b) => b - a)
  g.sort((a, b) => b - a)
  console.log(s, g)
  let len1 = g.length, len2 = s.length
  let count = 0, si = 0, gi = 0
  while (si < len2 && gi < len1) {
    if (s[si] >= g[gi]) {
      si++
      gi++
      count++
    }
    else {
      gi++
    }
  }
  return count
};
// let g = [1, 2, 3], s = [1, 1]
let g = [1,2], s = [1,2,3]
console.log(findContentChildren(g, s))