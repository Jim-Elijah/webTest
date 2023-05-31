let a
// 创建一个文档片段，此时还没有插入到 DOM 结构中
const frag = document.createDocumentFragment()
// for (let i = 0; i < 10; i++) {//每次循环产生一个作用块
//     a = document.createElement('a')
//     a.innerHTML = i + '<br>'
//     a.addEventListener('click', function (e) {
//         e.preventDefault()
//         alert(i)
//     })
//     frag.appendChild(a)
// }
for (var i = 0; i < 10; i++) {//每次循环产生一个作用块
  a = document.createElement('a')
  a.innerHTML = i + '<br>'
  a.addEventListener('click', function (e) {
    e.preventDefault();
    (function(i) {
      alert(i)
    })(i)
  })
  frag.appendChild(a)
}
document.body.appendChild(frag)