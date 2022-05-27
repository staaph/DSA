import { sumOfArray } from './sumOfArray';

describe('sumOfArray', () => {
  it('should return sum of all numbers in array', () => {
    expect(sumOfArray([1, 2, 3, 4])).toBe(10);
  });
});