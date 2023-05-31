function sort(arr) {
  const len = arr.length;
  let zero = -1, two = len, i = 0
  // arr[0~zero] = 0, arr[two~len-1] = 2
  while (i < two) {
    if (!arr[i]) {
      zero++;
      [arr[i], arr[zero]] = [arr[zero], arr[i]];
      i++
    } else if (arr[i] === 2) {
      two--;
      [arr[i], arr[two]] = [arr[two], arr[i]];
    } else {
      i++
    }
  }
  return arr;
}

// const arr = [1, 1, 2, 0, 1, 2];
const arr = [0, 1, 0, 1, 2, 0, 1, 2];
// const arr = [1, 1, 2, 2, 0, 0];
// const arr = [2, 2, 0, 0, 1, 1];
// const arr = [1]
console.log(sort(arr));
