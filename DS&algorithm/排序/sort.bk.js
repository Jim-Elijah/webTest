function log() {
  console.log(`${new Date().getTime()}:`, ...arguments);
}

function bubleSort(nums) {
  let count = 0, len = nums.length;
  // 外部循环，第i轮将第i大的数移到最终位置，len个数移动len-1次（当然len次也行）
  for (let i = 0; i < len - 1; i++) {
    let flag = false;
    // 从[0,len-1-i]中选最大的移到后面
    for (let j = 0; j < len - i - 1; j++) {
      log(`${j} ${nums[j]} ${nums[j + 1]}`);
      if ((j + 1 < len) && nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
        flag = true;
        count++;
      }
    }
    if (!flag) {
      break;
    }
  }
  console.log('loop times', count);
}

// function quickSort(arr) {
//   let len = arr.length;
//   tryQuickSort(0, len - 1)
//   return arr

//   function tryQuickSort(low, high) {
//     if (low < high) {
//       // let i = Partition(arr, low, high);
//       // 随机化快排 下面两行随机选一个数和arr[high]交换
//       let ran = random(low, high);
//       [arr[ran], arr[high]] = [arr[high], arr[ran]];
//       let i = Partition(arr, low, high);
//       tryQuickSort(low, i - 1);
//       tryQuickSort(i + 1, high);
//     }
//   }
// }
// // 以最右边的元素为pivot
// function Partition(arr, low, high) {
//   let a = arr[high], i = low - 1, j = low;
//   // arr[low, i] <= a ，arr[i+1, j-1] > a
//   while (j < high) {
//     if (arr[j] <= a) {
//       i++;
//       [arr[i], arr[j]] = [arr[j], arr[i]];
//     }
//     j++;
//   }
//   i++
//   [arr[i], arr[high]] = [arr[high], arr[i]];
//   return i;
// }

var findMedianSortedArrays = function (nums1, nums2) {
 
};

function random(m, n) {
  let ran = Math.random();
  // console.log(ran);
  return Math.round(ran * (n - m)) + m
}


function mergeSort(arr) {
  merge(arr, 0, arr.length - 1)
}

// merge其实就是合并两个有序数组，这里我们是对数组arr索引left~mid以及mid+1~right进行合并
function merge(arr, left, right) {
  //如果起始位置比终止位置小就开启排序逻辑
  if (left < right) {
    //确定中间值，将数组分成两部分
    let mid = Math.floor((left + right) / 2)
    //递归执行左侧部分的分解
    merge(arr, left, mid)
    //递归执行右侧部分的分解
    merge(arr, mid + 1, right)
    //分解完毕从最后一层递归中合并
    //定义左部分数组和右部分数组比较的起点
    let [l, r] = [left, mid + 1]
    //定义临时数组的指针
    let k = 0
    //当左侧数组和右侧数组任意一个没有走完的时候，因为分解时可能左右数组长度不一样
    let temp = []
    // 依次对比两数组的元素，谁小就谁放到前面， 直到一个数组已经走完
    while (l <= mid && r <= right) {
      temp[k++] = arr[l] >= arr[r] ? arr[r++] : arr[l++]
    }
    //当上面循环跳出时代表至少有一个数组走到头了
    //比较左数组是否到达终点，如果没有就继续向临时数组放值
    while (l <= mid) {
      temp[k++] = arr[l++]
    }
    //比较右数组是否到达终点如果没有就继续向临时数组放值
    while (r <= right) {
      temp[k++] = arr[r++]
    }
    //重制临时数组指针
    k = 0
    //从此次归并的长度范围将临时数组的排序结果放入原数组
    while (left <= right) {
      arr[left++] = temp[k++]
    }
  }
}



// let a = [3, 4, 2]
// let a = [1, 6, 3, 7, 4, 5]
// let a = [1, 2, 3, 4, 5, 6]
// let a = [6, 5, 4, 2, 1]
// log(a)
// log(quickSort(a))
// insertSort(a)
// log(a)
// let a1 = [1, 2, 3], a2 = [4, 5, 6];
let a1 = [3, 1, 5, 7, 0, 0], a2 = [1, 2]
// let a1 = [1], a2 = [1]
log(mergeSort(a1));
log(a1)
// log(a1, a2)
// console.log(a1)