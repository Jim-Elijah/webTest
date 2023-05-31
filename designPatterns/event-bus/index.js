class EventBus {
  constructor() {
    this.events = {}
  }
  on(type, fn) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(fn)
  }
  emit(type, ...args) {
    if (!this.events[type]) {
      console.warn(`can not emit. ${type} is not registered!`)
      return
    }
    // 执行fn写法一 推荐
    this.events[type].forEach(fn => fn.apply(this, args))
    // 执行fn写法二 当fun是写法二时this指向有问题
    // this.events[type].forEach(fn => fn(...args))
  }
  off(type, fn) {
    if (!this.events[type]) {
      console.warn(`can not off. ${type} is not registered!`)
      return
    }
    if (!fn || typeof fn !== 'function') {
      this.events[type] = []
      return
    }
    const index = this.events[type].findIndex(item => item === fn)
    this.events[type].splice(index, 1)
  }
  once(type, fn) {
    // fun写法一 推荐
    const fun = (...args) => {
      this.off(type, fun)
      fn.apply(this, args)
    }
    // fun写法二 执行fn是写法二时this指向有问题
    // const fun = function (...args) {
    //   this.off(type, fun)
    //   fn.apply(this, args)
    // }

    this.on(type, fun)
  }
}

const bus = new EventBus()

const fn1 = (...args) => {
  console.log('fn1', ...args)
}

const fn2 = (...args) => {
  console.log('fn2', ...args)
}

bus.emit('fn1', 'hello fn1')
bus.off('fn2')

bus.on('fn1', fn1)
bus.on('fn1', fn1)
bus.on('fn2', fn2)

bus.emit('fn1', 'hello fn1')
bus.emit('fn2', 'hello fn2')

console.log('-----------------')

bus.once('fn1', fn1)
bus.off('fn2', fn2)
bus.emit('fn1', 'hello fn1')
bus.emit('fn1', 'hello fn1')
bus.emit('fn2', 'hello fn2')

console.log('-----------------')
bus.off('fn1')
bus.emit('fn1', 'hello fn1')