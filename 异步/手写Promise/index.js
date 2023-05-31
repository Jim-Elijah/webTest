const PENDING = 'pending'
const RESOLVED = 'resolved'
const REJECTED = 'rejected'

class MyPromise {
  constructor(executor) {
    this.state = PENDING
    this.value = undefined
    this.reason = undefined
    this.onResolvedCallbacks = []
    this.onRejectedCallbacks = []

    let resolveHandler = (value) => {
      if (this.state === PENDING) {
        this.state = RESOLVED
        this.value = value
        this.onResolvedCallbacks.forEach(cb => cb(this.value))
      }
    }
    let rejectHandler = (reason) => {
      if (this.state === PENDING) {
        this.state = REJECTED
        this.reason = reason
        this.onRejectedCallbacks.forEach(cb => cb(this.reason))
      }
    }
    try {
      executor(resolveHandler, rejectHandler)
    } catch (err) {
      rejectHandler(err)
    }
  }

  then(onResolved, onRejected) {
    onResolved = typeof onResolved === 'function' ? onResolved : (v) => v
    onRejected = typeof onRejected === 'function' ? onRejected : (r) => r

    if (this.state === PENDING) {
      return new MyPromise((resolve, reject) => {
        this.onResolvedCallbacks.push(() => {
          try {
            const value = onResolved(this.value)
            resolve(value)
          } catch (err) {
            reject(err)
          }
        })
        this.onRejectedCallbacks.push(() => {
          try {
            const reason = onRejected(this.reason)
            resolve(reason)
          } catch (err) {
            reject(err)
          }
        })
      })
    }

    if (this.state === RESOLVED) {
      return new MyPromise((resolve, reject) => {
        try {
          const value = onResolved(this.value)
          resolve(value)
        } catch (err) {
          reject(err)
        }
      })
    }

    if (this.state === REJECTED) {
      return new MyPromise((resolve, reject) => {
        try {
          const reason = onRejected(this.reason)
          resolve(reason)
        } catch (err) {
          reject(err)
        }
      })
    }
  }

  catch(onRejected) {
    this.then(null, onRejected)
  }
}

MyPromise.resolve = function (value) {
  return new MyPromise((resolve, reject) => {
    resolve(value)
  })
}

MyPromise.reject = function (reason) {
  return new MyPromise((resolve, reject) => {
    reject(reason)
  })
}

MyPromise.all = function (promiseList = []) {
  return new MyPromise((resolve, reject) => {
    const len = promiseList.length
    let resolvedCount = 0
    const res = []
    try {
      promiseList.forEach((p, index) => {
        p.then((value => {
          res[index] = value
          resolvedCount++
          if (resolvedCount === len) {
            resolve(res)
          }
        }), (err) => {
          reject(err)
        })
          .catch(err => {
            reject(err)
          })
      })
    } catch (err) {
      reject(err)
    }
  })
}

MyPromise.race = function (promiseList = []) {
  return new MyPromise((resolve, reject) => {
    let hasResolved = false
    try {
      promiseList.forEach(p => {
        p.then((value => {
          if (!hasResolved) {
            hasResolved = true
            resolve(value)
          }
        }), (err) => {
          reject(err)
        })
          .catch(err => {
            reject(err)
          })
      })
    } catch (err) {
      reject(err)
    }
  })
}


// const p1 = new MyPromise((resolve, reject) => {
//   // resolve(1)
//   setTimeout(() => {
//     resolve(1)
//   }, 1000);
// })
// console.log('p1', p1)

// const p11 = p1.then((value) => {
//   console.log('p1 then', value)
// })

// console.log('p11', p11)

// const p2 = new MyPromise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2)
//   }, 1000);
// })
// console.log('p2', p2)

// const p21 = p2.then(value => console.log('p2 then', value),
//   err => {
//     console.error(err)
//   }
// )
// console.log('p21', p21)

// const p3 = new MyPromise((resolve, reject) => {
//   // reject('错误信息...')
//   setTimeout(() => {
//     reject('错误信息...')
//   }, 1000);
// })

// console.log('p3', p3)


// const p31 = p3.then(
//   (value) => { console.log('p3 then', value) }
//   , err => {
//     console.log('p3 err', err)
//   })
//   .then(value => {
//     console.log('111', value)
//   })
// // .catch(err => {
// //   console.log('p31 err', err)
// // })

// console.log('p31', p31)

