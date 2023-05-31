function reversedProduct(num) {
  if(typeof num !== 'number'){
    throw new Error(`${num} is not a number!`);
  }
  let maxLimit = num;
  for(let i=1; i<maxLimit; i++){
    let reverse = parseInt(i.toString().split('').reverse().join(''));
    let res  = reverse * i;
    if(res === num){
      return i;
    }
  }
  throw new Error('can not find such a number!')
}
let b =reversedProduct(8673885)
console.log('b', b)