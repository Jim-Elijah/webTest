var lengthOfLongestSubstring = function (s) {
  const len = s.length
  if (len < 2) {
    return len
  }
  // memo[i]存储以s[i]为结尾的最长无重复子串
  const memo = new Array(len).fill(-1)
  let res = -1
  tryMemo(len - 1)
  return res

  function tryMemo(i) {
    if (memo[i] !== -1) {
      return memo[i]
    }
    if (!i) {
      memo[i] = s[i]
      res = 1
      return memo[i]
    }
    let prev = tryMemo(i - 1)
    const index = prev.indexOf(s[i])
    if (index !== -1) {
      prev = prev.substr(index + 1)
    }
    memo[i] = prev + s[i]

    const len1 = memo[i].length
    if (len1 > res) {
      res = len1
    }
    return memo[i]
  }
};
console.log(lengthOfLongestSubstring('aaa'))