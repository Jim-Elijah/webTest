
// console.log('start')
// setTimeout(() => { console.log(timeout) })
// Promise.resolve().then(() => { console.log('promise then') })
// console.log('end')
// // // ajax(url, fn) // 假设 300ms
// // // Event Loop 继续监听
// // // 宏任务 MarcoTask Queue
// // () => {    //   console.log(timeout)    // }    // fn
// // // 1000ms 后，fn    
// // //  DOM 渲染    
// // // 微任务 MicroTask Queue    
// // () => {
// //   console.log('promise then')
// // }
// const p = document.createElement('p')
// p.innerHTML = 'new paragraph'
// document.body.appendChild(p)
// const list = document.getElementsByTagName('p')
// console.log('length---', list.length)
// console.log('start')
// // // 渲染之后  
// setTimeout(() => {
//   const list = document.getElementsByTagName('p')
//   console.log('length on timeout', list.length)
//   alert('阻塞 timeout')
// })
// // // 渲染之前    
// Promise.resolve().then(() => {
//   const list = document.getElementsByTagName('p')
//   console.log('length on promise', list.length)
//   alert('阻塞 promise')
// })
// console.log('end')



// console.log('start')
// setImmediate(() => { console.log("setImmediate") })
// setTimeout(() => { console.log('timeout') })
// Promise.resolve().then(() => { console.log('Promise then') })
// process.nextTick(() => { console.log('nextTick') })
// console.log('end')


setTimeout(() => {
  console.log('setTimeout');
}, 0);

setImmediate(() => {
  console.log('setImmediate');
});