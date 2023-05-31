var setZeroes = function(matrix) {
  let m = matrix.length;
  let n = matrix[0].length;
  let pos = [];
  for(let i=0; i<m; i++){
    for(let j=0; j<n; j++){
      if(matrix[i][j] === 0){
        pos.push([i, j])
      }
    }
  }
  console.log(pos)
  pos.forEach(a => {
    let i = a[0], j = a[1];
    for(let k=0; k<m; k++){
      matrix[k][j] = 0;
    }
    for(let k=0; k<n; k++){
      matrix[i][k] = 0;
    }
  })
};
// let matrix = [[1,1,1],[1,0,1],[1,1,1]];
let matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
console.log(matrix);
setZeroes(matrix)
console.log(matrix);