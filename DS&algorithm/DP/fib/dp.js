var fib = function (n) {
  if (n <= 0) {
    return 0
  }
  const memo = new Array(n + 1).fill(-1)
  memo[0] = 0
  memo[1] = 1
  return tryMemo(n)

  function tryMemo(k) {
    if (memo[k] !== -1) {
      return memo[k]
    }
    const tmp = (tryMemo(k - 1) + tryMemo(k - 2)) % (1e9 + 7)
    memo[k] = tmp
    return tmp
  }
};

console.log(fib(4))

