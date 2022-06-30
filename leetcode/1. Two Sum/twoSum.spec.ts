import { twoSum } from './twoSum'

const output = [
  [0, 4],
  [1, 4],
  [2, 4],
  [3, 4]
]
describe('Two Sum', () => {
  it('should return all numbers in array matching the provided sum', () => {
    expect(twoSum([1, 1, 1, 1, 2, 3, 4], 3)).toEqual(output)
  })
})
