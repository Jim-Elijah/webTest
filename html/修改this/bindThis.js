function bindThis(f, oTarget) {
  // return f.bind(oTarget);
  // return function () {
  //   return f.call(oTarget, ...arguments)
  // }
  return function () {
    return f.apply(oTarget, arguments);
  }
}

function fn() {
  function fn1(a, b) {
    return this.test + a + b
  }
  let obj = {
    test: 2
  }
  var r = bindThis(fn1, obj)(2, 3);
  return r === 7;
}
console.log(fn())