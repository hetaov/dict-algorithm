const bucketSort = (arr) => {
  const re = [];
  for (let i = 0, len = arr.length; i < len; i++) {
    re[arr[i]] = re[arr[i]] !== undefined ? re[arr[i]] + 1 : 1;
  }
  return re.flatMap((item, index) => (new Array(item ? item : 0)).fill(index));
}

export default bucketSort;