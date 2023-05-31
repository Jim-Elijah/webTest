const formerNthPrime = (n) => {
  if (n < 1) {
    console.log(`expect n to be positive but got ${n}`)
    return -1
  }
  let arr = []
  let len = arr.length
  while (len < n) {
    let start = len ? arr[len - 1] + 1 : 2
    while (!isPrime(start)) {
      start++
    }
    arr.push(start)
    len++
  }
  return arr

  function isPrime(n) {
    const len = Math.sqrt(n)
    for (let i = 2; i <= len; i++) {
      if (n % i === 0) {
        return false
      }
    }
    return true
  }
}
console.log(formerNthPrime(-1))
console.log(formerNthPrime(1))
console.log(formerNthPrime(5))
console.log(formerNthPrime(10))
