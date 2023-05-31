/**
 * 点击提交按钮，如果短时间内连续点击多次，会发送多次相同请求，为了避免这种情况
 * 实现一个通用的包装函数singlePipe，使得被包装的请求函数，在请求过程中如果再
 * 次调用该函数，不会发出请求，直到该次请求完成后才能再次发出请求;
 * @param {*} promiseFunc
 */
const singlePipe = function (promiseFunc) {
  let timer
  return function (data) {
    console.log('closure')
    if (timer) {
      console.log('clear timer')
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      console.log('set timer')
      timer = null
      return promiseFunc(data)
    }, 0);
  }
};
// 测试
var promiseFunc = function (data) {
  console.log('pFunc')
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
};
var request = singlePipe(promiseFunc);
// request 相当于
// function (data) {
//       console.log('closure')
//       return promiseFunc(data)
//     }
console.log(request)
// request(1).then(data => console.log(data))
request(1)
// request(1).then((data) => console.log(data)); // 1
// request(2).then((data) => console.log(data)); // 无反应
// setTimeout(() => {
//   request(3).then((data) => console.log(data)); // 3
// }, 1000);