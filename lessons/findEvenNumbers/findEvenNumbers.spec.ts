import { findEvenNumbers, getEvenNumbers } from './findEvenNumbers';

describe('findEvenNumbers', () => {
    it('should return all even numbers in an array', () => {
      expect(findEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
    });
  });

  describe('getEvenNumbers', () => {
    it('should return all even numbers in an array', () => {
      expect(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual([2, 4, 6, 8, 10]);
    });
  });