import { sumTarget, sumTargetOfBinary } from '../src/index'

it('sum of test', () => {
  const arr = [3, 8, 11, 22, 9]
  const target = 20
  const result = sumTarget(arr, target)
  expect(result).toEqual([2, 4])

  const arr1 = [3, 8, 11, 22, 9]
  const target1 = 30
  const result1 = sumTarget(arr1, target1)
  expect(result1).toEqual([1, 3])
})

it('sum of nomatch', () => {
  const arr = [3, 8, 11, 22, 9]
  const target = 32
  const result = sumTarget(arr, target)
  expect(result).toEqual([])
})


it('sum of binary', () => {
  const arr = [7, 13, 3, 8, 11, 22, 9];
  const target = 8;
  const result = sumTargetOfBinary(arr, target)
  expect(result).toEqual([7, 3])
})