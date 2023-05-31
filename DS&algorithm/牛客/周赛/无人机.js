/**
 * @param {number[][]} source
 * @param {number[][]} target
 * @return {number}
 */
 var minimumSwitchingTimes = function(source, target) {
  let m1 = arr2map(source);
  let m2 = arr2map(target);        
  let res = 0;
  for(let [key, val] of m1.entries()){
      if(!m2.has(key)){
          res += val;
      }else if(m2.get(key) !== val){
          res += Math.abs(val- m2.get(key))
      }
  }
  return res;
};

function arr2map(arr){
  let m = new Map();
  let len1 = arr.length;
  let len2 = arr[0].length;
  for(let i=0; i<len1; i++){
      for(let j=0; j<len2; j++){
          let n = arr[i][j]
          if(!m.has(n)){
              m.set(n, 1)
          }else {
              m.set(n, m.get(n)+1)
          }
      }
  }
  return m;
}

let source = [[2, 2],[5,4]], target = [[3,1],[6,5]]
console.log(minimumSwitchingTimes(source, target))