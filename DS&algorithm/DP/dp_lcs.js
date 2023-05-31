let X = ['A', 'B', 'C', 'B', 'D', 'A', 'B'];
let Y = ['B', 'D', 'C', 'A', 'B', 'A'];
let dp = Array(X.length).fill(0).map(x => Array(Y.length).fill(-1));
function LCS(i, j){
  if(dp[i][j] != -1){
    return dp[i][j];
  }
  if(i === 0 || j === 0){
    dp[i][j] = 0;
    console.log(dp[i][j]);
    return dp[i][j];
  }
  if(X[i] === Y[j]){
    dp = LCS(i-1, j-1)+1;
  }
  else {
    dp = Math.max(LCS(i, j-1), LCS(i-1, j));
  }
  console.log(dp[i][j]);
  return dp[i][j];
}
let len1 = X.length-1;
let len2 = Y.length-1;
console.log(dp);
LCS(len1, len2);
console.log(dp);