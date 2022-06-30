export const sumOfArray = (arr: number[]): number => {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
};
