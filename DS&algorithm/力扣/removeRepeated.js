function unique(a) {
  let len = a.length;
  if (len <= 1) {
    return a;
  }
  let i = 0;
  // [0,i]是互异有序
  for (let j = 1; j < len; j++) {
    if (a[j] !== a[i]) {
      a[++i] = a[j]
    }
  }
  a.length = i + 1;
  return a;
}

function removeAllRepeated(a) {
  let len = a.length;
  if (len <= 1) {
    return a;
  }
  let count = 0;
  // [0,i]是消除所有重复元素的有序序列
  for (let i = 0; i < len; i++) {
    if ((i !== len - 1 && a[i] === a[i + 1]) || (i !== 0 && a[i] === a[i - 1])) {
      count++;
    } else {
      a[i - count] = a[i]
    }
  }
  a.length -= count;
  return a;
}

// let a = [1, 2, 2, 3, 4, 4, 5]
// let a = [1, 1, 2, 3, 4, 4, 5]
// let a = []
let a = [1, 1]
// console.log(unique(a))
console.log(removeAllRepeated(a))