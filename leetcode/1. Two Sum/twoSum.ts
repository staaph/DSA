// modified output for double values
export const twoSum = function (
  nums: number[],
  target: number
): Array<number[]> {
  let result: Array<number[]> = []
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        result.push([i, j])
      }
    }
  }
  return result
}
