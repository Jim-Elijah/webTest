/**
 * @param {string} s
 * @return {boolean}
 */
// var isValid = function (s) {
//   if (!s.length) {
//       return false
//   }
//   const stack = []
//   const map = {
//       '(': ')',
//       '[': ']',
//       '{': '}'
//   }
//   const left = Object.keys(map)
//   for (let item of s) {
//       if (left.includes(item)) {
//           stack.push(item)
//           continue
//       }
//       const val = stack.pop()
//       console.log(val, item)
//       if (!map[val] === item) {
//           return false
//       }
//   }
//   return !stack.length
// };

var isValid = function (s) {
  const len = s.length
  if (!len) {
    return false
  }
  const stack = []
  const map = {
    '(': ')',
    '[': ']',
    '{': '}'
  }
  const left = Object.keys(map)
  for (let i = 0; i < len; i++) {
    const item = s[i]
    if (left.includes(item)) {
      stack.push(item)
      continue
    }
    const val = stack.pop()
    console.log(val, item)
    if (map[val] !== item) {
      return false
    }
  }
  return !stack.length
};

const s = "()(]"
console.log(isValid(s))
