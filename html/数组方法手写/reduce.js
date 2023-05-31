
function myReduce(fn, prev){
  const len = this.length;
  let i;
  i = prev === undefined ? 0 : 1;
  prev = prev || this[0];
  for(; i<len; i++){
    prev = fn(prev, this[i], i, this)
  }
  return prev
}

// Array.prototype.myReduce = myReduce;


Array.prototype.myReduce = function(fn, prev) {
  for(let i = 0; i < this.length; i++) {
    // 初始值不传时的处理
    if (typeof prev === 'undefined') {
      // 明确回调函数的参数都有哪些
      prev = fn(this[i], this[i+1], i+1, this);
      ++i;
    } else {
      prev = fn(prev, this[i], i, this)
    }
  }
  // 函数的返回结果会作为下一次循环的 prev
  return prev;
};

// let total = [1, 2, 3].reduce((prev, next, currentIndex, array) => {
//   return prev + next;
// }, 0);

let total = [1, 2, 3].myReduce((prev, next, currentIndex, array) => {
  return prev + next;
}, 0);


console.log(total); // 6