let count = 0, pos;
let data = []
while ((n = readDouble()) != null) {
  count++
  console.log(n)
  if (count === 2) {
    //console.log(typeof(n), n)
    pos = n;
  }
  if (count > 2) {
    data.push(n)
  }
}
data.sort(sortNumber)
console.log('sort', data)
let len = data.length;
let max = -Infinity
for (let i = 1; i < len; i++) {
  let dif = data[i] - data[i - 1]
  if (dif > max) {
    console.log('set new dif', dif)
    max = dif
  }
}
//console.log(pos, data[0], data[len-1], max)
if (data[0] > 0 && 2 * data[0] > max) {
  max = 2 * data[0]
}
if ((pos - data[len - 1]) > 0 && 2 * (pos - data[len - 1]) > max) {
  max = pos - data[len - 1]
}
console.log((max / 2).toFixed(2))
function sortNumber(a, b) {
  return a - b
}