let n = 2, k = 2
let s = '1,2,2,1'
// let n, k, s
// let arr = s.split(',')
arr = [1,2,2,1]
// arr = arr.forEach(val => val = parseInt(val))
console.log(n, k, arr)
function solution() {
  let min = 0;
  for (let i = 1; i < k; i++) {
    let curMin = Infinity, curPos;
    if (i === 1) {
      let startPos = calPos(i)
      let len = startPos.length
      for (let j = 0; j < len; j++) {
        // let [dist, nextPos] = [...jump(startPos[j])]
        let res = jump(startPos[j])
        let dist = res[0], nextPos = res[1]
        console.log(dist. nextPos)
        if (dist === -1) {
          return -1
        }
        if (dist < curMin) {
          curMin = dist, curPos = nextPos;
        }
      }
      min += curMin;
    }
    else {
      let res = jump(startPos[j])
        let dist = res[0], nextPos = res[1]
      console.log(dist. nextPos)
      if (dist === -1) {
        return -1
      }
      curMin = dist, curPos = nextPos;
      min += curMin;
    }

  }
  return min;
}
function jump(startPos) {
  let [sx, sy] = [...startPos]
  let startVal = arr[sx][sy], endVal = startVal + 1;
  let endPos = calPos(endVal)
  let len2 = endVal.length;
  let minDist = Infinity
  let pos = []
  if (len2 === 0) {
    return -1
  }
  for (let j = 0; j < len2; j++) {
    if (minDist > dist(arr, endPos[j])) {
      minDist = dist(arr, endPos[j])
      pos = endPos[j]
    }
  }
  return [minDist, pos];
}

function calPos(start) {
  let pos = arr.indexOf(start);
  let startPos = []
  while (arr.indexOf(start) !== -1) {
    startPos.push([parseInt(pos / n), pos % n])
    pos = arr.indexOf(start, pos)
  }
  return startPos
}

function dist(arr1, arr2) {
  let startX = arr1[0], startY = arr1[1]
  let endX = arr2[0], endY = arr2[1]
  return Math.abs(startX - endX) + Math.abs(startY - endY)
}
console.log(solution())


// 输入样例2
// 	4 4
// 	1 2 2 1
// 	2 4 4 1
// 	4 4 4 2
// 	1 1 1 2
// 输出样例2
	// -1


//   样例输入
// 2 2
// 1 2
// 2 1
// 样例输出
// 1