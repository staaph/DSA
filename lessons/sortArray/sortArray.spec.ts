import { sortArray, sortArraytoGreatest, sortArrayToLeast } from './sortArray';

describe('sortArray', () => {
  it('should sort the array in ascending order', () => {
    expect(sortArray([3, 1, 6, 4])).toEqual([1, 3, 4, 6]);
    expect(sortArray([-2, -5, 4, 15])).toEqual([-5, -2, 4, 15]);
  });
});

describe('sortArraytoGreatest', () => {
  it('should sort the array in ascending order', () => {
    expect(sortArraytoGreatest([3, 1, 6, 4])).toEqual([1, 3, 4, 6]);
    expect(sortArraytoGreatest([-2, -5, 4, 15])).toEqual([-5, -2, 4, 15]);
  });
});

describe('sortArrayToLeast', () => {
  it('should sort the array in decreasing order', () => {
    expect(sortArrayToLeast([3, 1, 6])).toEqual([6, 3, 1]);
    expect(sortArrayToLeast([-4, -2, 4, 7])).toEqual([7, 4, -2, -4]);
  });
});
