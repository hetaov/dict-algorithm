import quickSort from '../src/sort/quickSort';

it('quick sort', () => {
  const arr = [5, 8, 6, 9, 11, 7];
  const result = quickSort(arr);
  expect(result).toEqual([5, 6, 7, 8, 9, 11])
});