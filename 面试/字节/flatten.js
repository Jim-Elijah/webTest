function flattenArr(arr) {
  return arr.toString().split(',')
}
function flattenArr2(arr) {
  let len = arr.length, res = []
  for (let i = 0; i < len; i++) {
    // console.log(arr[i], arr[i] instanceof Array)
    if (!(arr[i] instanceof Array)) {
      res.push(arr[i])
      // console.log('push non Array')
    }
    else {
      let tmp = flattenArr2(arr[i])
      // console.log('tmp', tmp)
      res.push(...tmp)
      // res.push.apply(res, tmp)
      // console.log('push  Array')

    }
  }
  return res
}
var arr = [1, [2, [3, 4]], [5, 6], 7];
// var newArr = flattenArr(arr);
// console.log(newArr); // [1, 2, 3, 4, 5, 6，7]
var newArr2 = flattenArr2(arr);
console.log(newArr2); // [1, 2, 3, 4, 5, 6，7]