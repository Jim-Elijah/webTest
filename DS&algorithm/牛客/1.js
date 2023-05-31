function findMaxButtons(buttons) {

  let len = buttons.length;
  let memo = new Array(len+1).fill(-1);
  return tryFindMaxButtons(len);
  // 通过第i+1关需要的次数
  function tryFindMaxButtons(i) {
    if (i === 1) {
      return buttons[i];
    }
    memo[1] = buttons[0];
    for (let j = 2; j <= i; j++) {
      console.log(j, memo[j-1]);
      memo[j] = memo[j - 1] - (j - 1) + j * buttons[j-1]
    }
    console.log(memo)
    return memo[i];
  }
}

let bn = [2, 2, 2]
console.log(findMaxButtons(bn));
