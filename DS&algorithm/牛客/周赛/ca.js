/**
 * @param {number[]} cards
 * @param {number} cnt
 * @return {number}
 */
var maxmiumScore = function(cards, cnt) {
  cards.sort((a, b) => b-a)
  let tmp = cards.slice(0, cnt);
  let sum = tmp.reduce((acc, val) => acc + val, 0);
  if(sum % 2 === 0){
    return sum;
  }
  if
};
