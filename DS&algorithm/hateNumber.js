function f(x) {
  let arr = []
  for (let i = 1; i <= x; i++) {
    if (x % i === 0) {
      arr.push(i)
    }
  }
  arr.push()
  return arr.join('')
}
let a = [13,31, 10, 9, 20]
a.forEach(val => {
  console.log(f(val))
})
