/**
 * 
 * @param {Array} a 
 * @returns Number
 */
function leastHat(a) {
  let len = a.length;
  if (len === 0) {
    return 0
  }
  let s = new Set()
  for (let i = 0; i < len; i++) {
    s.add(a[i] + 1)
  }
  let tmp = [...s], num = 0;
  for (item in tmp) {
    num += tmp[item]
  }
  return num
}

let a = [1, 1, 2, 2, 3] // 9
// let a = [1, 1, 2]  // 5
console.log(leastHat(a))

/**
 * 最少帽子数
 * 第i个人说有ni个人和他有相同颜色的帽子ci（有的人不说出ni），求最小帽子数
 * eg. [1,1,2]， 输出5
 * 第一个人说有一个人和他帽子颜色c1相同，则c1有两人；同理颜色c2有2人，颜色c3有3人
 * c1和c2可以同颜色也可以不同颜色，当c1=c2时有最小帽子数2+3=5
 */

// // 本题为考试多行输入输出规范示例，无需提交，不计分。
// var readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
//     terminal:false
// });

// rl.on('line', function(line){ // javascript每行数据的回调接口
//    let data = line.split('')
//    return leastHat(data)
// });