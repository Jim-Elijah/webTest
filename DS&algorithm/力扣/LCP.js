var longestCommonPrefix = function (strs) {
  let len = strs.length;
  if (len === 0) {
    return '';
  }
  let lcp = strs[0];
  for (let i = 1; i < len; i++) {
    let s = strs[i], l = s.length;
    let res = ''
    for (let j = 0; j < l; j++) {
      if (lcp[j] !== s[j]) {
        break;
      }
      res += s[j];
    }
    lcp = res;
  }
  return lcp;
};

let strs = ["flower", "flow", "flight"];
// let strs = ["dog","racecar","car"];
// let strs = ["baab","bacb","b","cbc"];
console.log(longestCommonPrefix(strs))