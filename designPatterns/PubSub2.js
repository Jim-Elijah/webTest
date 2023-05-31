// https://blog.csdn.net/weixin_43792004/article/details/113442506
// 主题，也叫做Subject
class Dep {
  constructor(topic, callback) {
    this.subs = []; // 主题的订阅者
    this.topic = topic
    this.callback = callback;
  }
  // 添加订阅者
  addSub(sub) {
    this.subs.push(sub);
  }
  // 主题更新通知---调用订阅者update，通知所有订阅者
  notify() {
    this.subs.forEach(item => item.update(this.topic, this.callback));
  }
}

// 订阅者
class Sub {
  constructor(name) {
    this.name = name
  }
  // 订阅主题
  subscribe(dep){
    dep.addSub(this)
  }
  // 收到更新通知
  update(topic, callback) {
    callback(`${this.name} 订阅了 ${topic}`); // 执行订阅主题的函数
  }
}

// 发布者
class Pub {
  constructor() {
    this.deps = []; // 发布的主题列表
  }
  // 添加主题
  addDep(dep) {
    this.deps.push(dep);
  }
  // 移除主题
  removeDep(dep) {
    let index = this.deps.indexOf(dep);
    if (index !== -1) {
      this.deps.splice(index, 1);
      return true;
    } else {
      return false;
    }
  }
  // 发布主题
  publish(dep) {
    this.deps.forEach(item => item == dep && item.notify());
  }
}

let fn = val => console.log(val)

// 新建主题
let dep1 = new Dep('主题1', fn);
let dep2 = new Dep('主题2', fn);
// 新建订阅者
let sub1 = new Sub('jack')
let sub2 = new Sub('jerry')
let sub3 = new Sub('mary')
// 订阅主题
sub1.subscribe(dep1)
sub2.subscribe(dep1)
sub3.subscribe(dep2)

// 新建发布者
let pub = new Pub();
// 添加主题
pub.addDep(dep1);
pub.addDep(dep2);
// 发布者发布，通知这个主题的所有订阅者更新
pub.publish(dep1);
pub.publish(dep2);
dep2.topic = '主题2已修改'
pub.publish(dep2);

// // 输出结果
// jack 订阅了 主题1
// jerry 订阅了 主题1
// mary 订阅了 主题2
// mary 订阅了 主题2已修改