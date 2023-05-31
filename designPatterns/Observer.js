// Subject 主题
class Dep {
  constructor() {
    this.subs = []
  }
  add(sub) {
    this.subs.push(sub)
  }
  notify(msg) {
    this.subs.forEach(sub => sub.update(msg))
  }
}
// Watcher 观察者
class Watcher {
  constructor(name = 'jack') {
    this.name = name
  }
  update(msg){
    console.log(`${this.name} 订阅了 ${msg}`)
  }
  subscribe(dep){
    dep &&　dep.add(this)
  }
}
let dep = new Dep()
let w1 = new Watcher('jerry')
let w2 = new Watcher()
w1.subscribe(dep)
w2.subscribe(dep)
dep.notify('pub-sub')
// 输出
// jerry 订阅了 pub-sub
// jack 订阅了 pub-sub