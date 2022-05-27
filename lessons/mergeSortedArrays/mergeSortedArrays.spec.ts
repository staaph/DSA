import { mergeSortedArrays, mergeSortedArrays2 } from './mergeSortedArrays';

describe('mergeSortedArrays', () => {
  it('should sort two arrays into one', () => {
    expect(mergeSortedArrays([1, 2, 3], [2, 5, 12])).toEqual([
      1, 2, 2, 3, 5, 12,
    ]);
  });
});

describe('mergeSortedArrays2', () => {
    it('should sort two arrays into one', () => {
      expect(mergeSortedArrays2([1, 2, 3], [2, 5, 12])).toEqual([
        1, 2, 2, 3, 5, 12,
      ]);
    });
  });
