class jQuery {
  constructor(selector) {
    const result = document.querySelectorAll(selector)
    const length = result.length
    for (let i = 0; i < length; i++) {
      console.log(`loop this ${this}`)
      this[i] = result[i]
    }
    this.length = length
    this.selector = selector
    console.log(`this ${this}`)
  }
  get(index) {
    return this[index]
  }
  each(fn) {
    for (let i = 0; i < this.length; i++) {
      const elem = this[i]
      fn(elem)
    }
  }
  on(type, fn) {
    return this.each(elem => {
      elem.addEventListener(type, fn, false)
    })
  }
  off(type, fn) {
    return this.each(elem => {
      elem.removeEventListener(type, fn, false)
    })
  }
  // 扩展很多 DOM API
}

// 插件
jQuery.prototype.dialog = function (info) {
  alert(info)
}

// “造轮子”/扩展
class myJQuery extends jQuery {
  constructor(selector) {
    super(selector)
  }
  // 扩展自己的方法
  addClass(className) {

  }
  style(data) {

  }
}

const $p = new jQuery('p')
$p.get(1)
$p.each((elem) => console.log(`${elem.nodeName} ${elem.innerHTML}`))
$p.on('click', (e) => alert(`clicked ${e.target.innerHTML}`))
let fn = (e) => console.log(e.target.innerHTML)
$p.on('mouseover', fn)
setTimeout(() => {
  console.log('remove mouseover event');
  $p.off('mouseover', fn) //移除事件监听的回调不能是匿名的
  console.log('removed');
}, 5*1000);