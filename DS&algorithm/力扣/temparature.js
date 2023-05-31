var dailyTemperatures = function (T) {
  let len = T.length;
  let res = [];
  for (let i = 0; i < len; i++) {
    let flag = false;
    for (let j = i + 1; j < len; j++) {
      if (T[j] > T[i]) {
        res.push(j - i);
        // console.log(`push ${j-i}, length:${res.length}`)
        flag = true;
        break;
      }
    }
    if (!flag) {
      res.push(0);
    }
  }
  return res;
};

let a = [73, 74, 75, 71, 69, 72, 76, 73];
console.log(dailyTemperatures(a))
