function sumTarget(arr, target) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    const index = arr.indexOf(target - arr[i])
    if (index >= 0 && index !== i ) {
      return [i, index]
    }
  }
  return result
}

function sumTargetOfBinary(arr, target) {
  const st = [];
  let i = 0;
  let j = arr.length - 1;
  // let mid = Math.floor(arr.length / 2);
  for(let k = 0; k < arr.length; k++) {
    if (arr[k] < target) {
      st[i] = arr[k];
      i++;
    } else {
      st[j] = arr[k];
      j--;
    }
  }
  return st;
}

export {
  sumTarget,
  sumTargetOfBinary,
}