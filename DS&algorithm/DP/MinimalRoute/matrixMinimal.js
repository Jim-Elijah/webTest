function log() {
  console.log(...arguments);
}

/**
 * 
 * @param {matrix} m 
 */
function minimalRouteSum(m) {
  let len1 = m.length;
  let len2 = m[0].length;
  let memo = new Array(len1).fill(-1).map(() => new Array(len2).fill(-1));
  memo[0][0] = m[0][0];
  return tryMinimal(len1 - 1, len2 - 1);
  function tryMinimal(r, c) {
    if (r < 0 || c < 0) {
      return Infinity;
    }
    if (memo[r][c] !== -1) {
      return memo[r][c];
    }
    // log(r, c, m[r][c]);
    let rs1 = tryMinimal(r - 1, c) + m[r][c];
    let rs2 = tryMinimal(r, c - 1) + m[r][c];
    let rs = Math.min(rs1, rs2);
    memo[r][c] = rs;
    // log( memo[r][c])
    return rs;
  }
}

let m = [[1,3,1],[1,5,1],[4,2,1]];
// let m = [[1, 2, 3], [4, 5, 6]];
// let m = [[0]];
log(minimalRouteSum(m));
