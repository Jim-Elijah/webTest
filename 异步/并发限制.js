const { urls, request } = require('./mock')

class PromiseQueue {
  constructor({ limit = 1 }) {
    this.pendingList = []
    this.concurrency = limit
    this.count = 0
  }
  add(obj) {
    this.pendingList.push(obj)
    this.run()
  }
  run() {
    if (this.pendingList.length && this.count < this.concurrency) {
      const { fn } = this.pendingList.sort((a, b) => b.priority - a.priority).shift()
      this.count++
      fn().then()
        .catch()
        // 注意：bind改变this指向
        .finally(this.completeOne.bind(this))
    }
  }
  completeOne() {
    this.count--
    this.run()
  }
}
const queue = new PromiseQueue({ limit: 3 })

urls.forEach(url => {
  queue.add({
    priority: url.priority,
    fn: () => request(url)
  })
})

const url = {
  url: 'max priority',
  time: 1500,
  priority: 10,
}
queue.add({
  priority: url.priority,
  fn: () => request(url)
})