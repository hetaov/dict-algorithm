function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
function quickSort(arr, p, r) {
  if (p < r) {
    const q = partition(arr, p, r);
    quickSort(arr, p, q - 1);
    quickSort(arr, q + 1, r);
  }
}

function partition(arr, p, r) {
  let i = p - 1;
  const x = arr[r];
  let count = 0;
  for(let j = p; j < r; j++) {
    if (arr[j] === x) {
      count += 1;
    }
    if (arr[j] <= x) {
      i += 1;
      swap(arr, i, j);
    }
  }
  swap(arr, i + 1, r);
  return Math.floor(i + 1 - count / 2);
}

const params = [1, 2, 6, 5, 7, 99, 10, 11, 9, 22, 14, 8];
console.log('sort before ', params);
quickSort(params, 0, params.length - 1);
console.log(' sorted ', params);