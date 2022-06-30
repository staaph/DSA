import { mergeSortedArrays, mergeSortedArrays2 } from './mergeSortedArrays'

const output = [1, 2, 2, 3, 5, 12]

describe('mergeSortedArrays', () => {
  it('should sort two arrays into one', () => {
    expect(mergeSortedArrays([1, 2, 3], [2, 5, 12])).toEqual(output)
  })
})

describe('mergeSortedArrays2', () => {
  it('should sort two arrays into one', () => {
    expect(mergeSortedArrays2([1, 2, 3], [2, 5, 12])).toEqual(output)
  })
})
