import bucketSort from '../src/sort/bucketSort';

it('bucket sort', () => {
  const arr = [5, 8, 6, 9, 11, 7, 2 , 18, 1, 1922750];
  const result = bucketSort(arr);
  console.log(result, ' bucket sort');
  expect(result).toEqual([1, 2, 5, 6, 7, 8, 9, 11, 18, 1922750])
});