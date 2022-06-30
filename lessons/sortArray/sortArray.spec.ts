import { sortArray, sortArraytoGreatest, sortArrayToLeast } from './sortArray'

const input1 = [3, 1, 6, 4]
const output1 = [1, 3, 4, 6]
const input2 = [-2, -5, 4, 15]
const output2 = [-5, -2, 4, 15]

describe('sortArray', () => {
  it('should sort the array in ascending order', () => {
    expect(sortArray(input1)).toEqual(output1)
    expect(sortArray(input2)).toEqual(output2)
  })
})

describe('sortArraytoGreatest', () => {
  it('should sort the array in ascending order', () => {
    expect(sortArraytoGreatest(input1)).toEqual(output1)
    expect(sortArraytoGreatest(input2)).toEqual(output2)
  })
})

describe('sortArrayToLeast', () => {
  it('should sort the array in descending order', () => {
    expect(sortArrayToLeast([3, 1, 6])).toEqual([6, 3, 1])
    expect(sortArrayToLeast([-4, -2, 4, 7])).toEqual([7, 4, -2, -4])
  })
})
