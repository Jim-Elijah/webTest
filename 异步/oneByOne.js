function request(x) {
  return new Promise(resolve => {
    const timer = setTimeout(() => {
      console.log(x)
      resolve(x)
      clearTimeout(timer)
    }, 1000)
  })
}

const arr = [];
let index = 0;
function service(x) {
  arr.push(x)
  console.log('push', x, arr)
  closureFn(x)
}
function closureFn(x) {
  const fn = (x) => {
    if (index >= arr.length) {
      return
    }
    const curIndex = arr.findIndex(item => item === x)
    if (curIndex !== index) {
      return
    }
    const item = arr[index]
    request(item)
      .then((res) => {
        console.log(`res ${+new Date()}`, res)
        index++
        fn(arr[index])
      })
  }
  // return () => {
    fn(x)
  // }
}

// function closureFn(x) {
//   const fn = (x) => {
//     // if (index >= arr.length) {
//     //   return
//     // }
//     let index = arr.findIndex(item => item === x)
//     if (index === -1) {
//       return
//     }
//     const item = arr[index]
//     request(item)
//       .then((res) => {
//         console.log(`res ${+new Date()}`, res)
//         index++
//         fn(arr[index])
//       })
//   }
//   return () => {
//     fn(x)
//   }
// }

service(1)
service(2)
service(3)
service(4)