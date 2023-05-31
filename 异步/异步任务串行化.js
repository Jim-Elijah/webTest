const promiseCreator = (data, delay = 100) => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('timeout', data)
    resolve(data)
  }, delay);
})


const p1 = () => promiseCreator('p1', 500)
const p2 = () => promiseCreator('p2', 1000)
const p3 = () => promiseCreator('p3', 800)

async function queue(arr) {
  let res = null
  for (let promise of arr) {
    console.log('res', res, promise)
    res = await promise(res)
  }
  return await res // 这里的await可以去掉，因为已经是最后一步了
}


// 因为async返回返回的也是promise，所以可以使用then
queue([p1, p2, p3])
  .then(data => {
    console.log(data) // 111222333
  })