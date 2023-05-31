// 父类
function People(name) {
  this.name = name;
  return { age: 20 }
}
People.prototype.eat = function () {
  console.log(`${this.name} eat something`)
}

// 子类
// function Student(name, number) {
//   People.call(this, name)
//   this.number = number
// }

function Student(name, number) {
  var _this;
  _this = People.call(this, name) || this;
  _this.number = number
  return _this
}

Student.prototype.__proto__ = People.prototype;

Student.prototype.sayHi = function () {
  console.log(`姓名 ${this.name} 学号 ${this.number}`)
}

const xialuo = new Student('夏洛', 100)