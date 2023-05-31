/**
 * @param {number[][]} triangle
 * @return {number}
 * https://www.cnblogs.com/lwy1103/p/9639934.html 创建二维数组
 */
var minimumTotal = function (triangle) {
  let len1 = triangle.length;
  let len2 = triangle[len1-1].length;
  // let maxNum = Number.MAX_SAFE_INTEGER;
  let memo = new Array(len1).fill(0).map(x=>new Array(len2).fill(0));
  // let memo = new Array(len1).fill(0).map(item => {
  //   new Array(len2);
  // });
  
  return DP(triangle, 0, 0)

  function DP(arr, i, j) {
    console.log(i, j, arr[i][j])
    let res;
    let num = i === 0 ? arr[i][0] : arr[i][j];
    if (i === len1 - 1) {
      return arr[i][j];
    }
    if(memo[i][j]){
      return memo[i][j];
    }
    res = num + Math.min(DP(arr, i + 1, j), DP(arr, i + 1, j + 1));
    memo[i][j] = res;
    console.log('res', res)
    return res;
  }
};


let triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]]
let rs = minimumTotal(triangle)
console.log(rs)