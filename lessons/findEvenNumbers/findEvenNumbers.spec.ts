import { findEvenNumbers, getEvenNumbers } from './findEvenNumbers'

const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const output = [2, 4, 6, 8, 10]

describe('findEvenNumbers', () => {
  it('should return all even numbers in an array', () => {
    expect(findEvenNumbers(input)).toEqual(output)
  })
})

describe('getEvenNumbers', () => {
  it('should return all even numbers in an array', () => {
    expect(getEvenNumbers(input)).toEqual(output)
  })
})
