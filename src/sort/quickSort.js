const quickSortModule = (arr, left, right) => {
  
  let porivo = arr[left];
  let i = left + 1;
  let j = right;
  while(i < j) {
    while(arr[i] < porivo && i < j) {
      i++;
    }

    while(arr[j] > porivo && i < j) {
      j--;
    }
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  console.log(i, j, ' final i and j');

  let temp = arr[i];
  arr[i] = arr[left];
  arr[left] = temp;

  const mid = Math.floor((left + right) / 2);
  if (left < mid) {
    quickSortModule(arr, left, mid)
  }
  if (mid < right) {
    quickSortModule(arr, mid + 1, right)
  }
}
const quickSort = (arr) => {
  console.log('quick sort arr', arr);
  quickSortModule(arr, 0, arr.length - 1);
  return arr;
};

const swap = (arr, left, right) => {
  const temp = arr[left];
  arr[left] = arr[right];
  arr[right] = temp;
};

const swapWithMid = (arr, left, right) => {
  // console.log(left, right, arr);
  if (right - left === 1) {
    if (arr[left] > arr[right]) {
      swap(arr, left, right);
    }
    return;
  }
  const pivot = arr[left];
  let i = left;
  let j = right;
  while(i < j) {
    while (i < j && arr[i] <= pivot) {
      i++;
    }
    while (i < j && arr[j] > pivot) {
      j--;
    }
    console.log(i, j, ' swap i and j', arr[i], arr[j]);
    if (i < j) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
    console.log(arr, ' in while ', i, j);
  }
  let mid = i;
  let temp = arr[mid];
  arr[mid] = arr[left];
  arr[left] = temp;
  console.log(arr, ' out while ', i, j);

  // console.log(left, mid, right, ' split ---> ', arr, arr[mid]);
  if (left < mid - 1) {
    swapWithMid(arr, left, mid - 1);
  }
  if (mid + 1 < right) {
    swapWithMid(arr, mid + 1, right);
  }
  return mid;
}

// const arr = [5, 8, 6, 9, 11, 7];
// const result = quickSort(arr);
// console.log(result, ' result from ... ');
// const arr1 = [7, 8, 6, 22, 9, 99, 10, 11, 2, 5, 14, 1];
// swapWithMid(arr1, 0, arr1.length - 1);
// console.log(arr1, ' arr1 from ');
// const arr2 = [9, 8, 1, 27, 99, 10, 7, 11, 18];
// const result = swapWithMid(arr2, 0, arr2.length - 1);
// console.log(arr2, ' the result 0, 8', result);
// const result1 = swapWithMid(arr2, 0, 3);
// console.log(arr2, ' the result 0, 3', result1);
// const result2 = swapWithMid(arr2, 4, 8);
// console.log(arr2, ' the result 4, 8', result2);

// const arr3 = [
//   1,  7,  8,  9, 11,
//  10, 27, 99, 18
// ];

// const result3 = swapWithMid(arr3, 4, 8);
// console.log(arr3, result3, ' test ');
// const result4 = swapWithMid(arr3, 6, 8);
// console.log(arr3, result4, ' test ');
// export default quickSort[
 const params = [1, 2, 6, 5, 7, 99, 10, 11, 9, 22, 14, 8];
 console.log(params, ' before sort');
const result4 = swapWithMid(params, 5, 11);
console.log(params, ' result ');