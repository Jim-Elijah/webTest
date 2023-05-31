class EventEmitter {
  constructor() {
    this.eventMap = {}
  }
  on(type, fn) {
    if (!this.eventMap[type]) {
      this.eventMap[type] = []
    }
    this.eventMap[type].push(fn)
  }
  emit(type, ...args) {
    if (!this.eventMap[type]) {
      console.error(`event ${type} is not registered!`)
      return
    }
    this.eventMap[type].forEach(fn => fn(...args))
  }
  once(type, fn) {
    let cb = (...args) => {
      fn(...args)
      this.off(type)
    }
    this.on(type, cb)
  }
  off(type, fn) {
    let list = this.eventMap[type]
    if (!list.length) {
      console.error(`event ${type} is not registered!`)
      return
    }
    if (!fn) {
      list && (list.length = 0)
      return
    }
    this.eventMap[type] = list.filter(cb => cb != fn)
  }
}

let em = new EventEmitter();
// let workday = 0;
// em.on("work", function () {
//   workday++;
//   console.log("work everyday");
// });

// em.once("love", function () {
//   console.log("just love you");
// });

// function makeMoney() {
//   console.log("make one million money");
// }
// em.on("money", makeMoney)

// let time = setInterval(() => {
//   em.emit("work");
//   em.off("money", makeMoney);
//   em.emit("money");
//   em.emit("love");
//   if (workday === 5) {
//     console.log("have a rest")
//     clearInterval(time);
//   }
// }, 1);

let clickFn = (val) => { console.log(val) }
em.on('click', clickFn)
em.on('click', clickFn)
em.on('click', () => { console.log('1. no params in this click!') })
em.on('click', () => { console.log('2. no params in this click!') })
em.emit('click', 'click1')
console.log('-----------------')
em.off('click', clickFn) //off clickfn
em.emit('click', 'click2')
console.log('-----------------')
em.off('click') // off all click's cb
em.emit('click', 'click3')
console.log('-----------------')
// em.off('click') // no click's cb
em.once('love', (val) => {console.log(val)})
em.emit('love', 'love you forever')
em.emit('love', 'love you forever')
