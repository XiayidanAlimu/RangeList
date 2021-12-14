import RangeList from './RangeList'

test('A RangeList to be created, which is named as rl', () => {
  const rl = new RangeList()
  expect(rl).toBeDefined()
});

test('add range [1, 5] to rl', () => {
  const rl = new RangeList()
  rl.add([1, 5])
  expect(rl.ranges).toEqual([[1, 5]])
});

test('add range [10, 20] to rl', () => {
  const rl = new RangeList()
  rl.add([1, 5])
  rl.add([10, 20])
  expect(rl.ranges).toEqual([[1, 5], [10,20]])
});

test('add range [20, 20] to rl', () => {
  const rl = new RangeList()
  rl.add([1, 5])
  rl.add([10, 20])
  rl.add([20, 20])
  expect(rl.ranges).toEqual([[1, 5], [10,20]])
});

test('add range [20, 21] to rl', () => {
  const rl = new RangeList()
  rl.add([1, 5])
  rl.add([10, 20])
  rl.add([20, 20])
  rl.add([20, 21])
  expect(rl.ranges).toEqual([[1, 5], [10,21]])
});

test('add range [2, 4] to rl', () => {
  const rl = new RangeList()
  rl.add([1, 5])
  rl.add([10, 20])
  rl.add([20, 20])
  rl.add([20, 21])
  rl.add([2, 4])
  expect(rl.ranges).toEqual([[1, 5], [10,21]])
});

test('add range [3, 8] to rl', () => {
  const rl = new RangeList()
  rl.add([1, 5])
  rl.add([10, 20])
  rl.add([20, 20])
  rl.add([20, 21])
  rl.add([2, 4])
  rl.add([3, 8])
  expect(rl.ranges).toEqual([[1, 8], [10,21]])
});

test('remove range [10, 10] to rl', () => {
  const rl = new RangeList()
  rl.add([1, 5])
  rl.add([10, 20])
  rl.add([20, 20])
  rl.add([20, 21])
  rl.add([2, 4])
  rl.add([3, 8])
  rl.remove([10, 10])
  expect(rl.ranges).toEqual([[1, 8], [10,21]])
});

test('remove range [10, 11] to rl', () => {
  const rl = new RangeList()
  rl.add([1, 5])
  rl.add([10, 20])
  rl.add([20, 20])
  rl.add([20, 21])
  rl.add([2, 4])
  rl.add([3, 8])
  rl.remove([10, 10])
  rl.remove([10, 11])
  expect(rl.ranges).toEqual([[1, 8], [11,21]])
});

test('remove range [15, 17] to rl', () => {
  const rl = new RangeList()
  rl.add([1, 5])
  rl.add([10, 20])
  rl.add([20, 20])
  rl.add([20, 21])
  rl.add([2, 4])
  rl.add([3, 8])
  rl.remove([10, 10])
  rl.remove([10, 11])
  rl.remove([15, 17])
  expect(rl.ranges).toEqual([[1, 8], [11,15], [17, 21]])
});

test('remove range [3, 19] to rl', () => {
  const rl = new RangeList()
  rl.add([1, 5])
  rl.add([10, 20])
  rl.add([20, 20])
  rl.add([20, 21])
  rl.add([2, 4])
  rl.add([3, 8])
  rl.remove([10, 10])
  rl.remove([10, 11])
  rl.remove([15, 17])
  rl.remove([3, 19])
  expect(rl.ranges).toEqual([[1, 3], [11,15], [19, 21]])
});
