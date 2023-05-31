function heapSort(array) {
  buildMaxHeap(array);
  for (let i = array.length - 1; i > 0; i--) {
    swap(array, 0, i);
    maxHeapify(array, 0, i);
  }
  return array;
}
function buildMaxHeap(array) {
  const len = array.length;
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    maxHeapify(array, i, len);
  }
}
function maxHeapify(array, i, len) {
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  let largest = i;
  if (left < len && array[left] > array[largest]) {
    largest = left;
  }
  if (right < len && array[right] > array[largest]) {
    largest = right;
  }
  if (largest !== i) {
    swap(array, i, largest);
    maxHeapify(array, largest, len);
  }
}
function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}