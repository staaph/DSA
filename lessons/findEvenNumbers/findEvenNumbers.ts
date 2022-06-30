export const findEvenNumbers = (arr: number[]): number[] => {
  return arr.filter((num) => num % 2 == 0)
}

export const getEvenNumbers = (arr: number[]) => {
  const evenNumberArray = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      evenNumberArray.push(arr[i])
    }
  }
  return evenNumberArray
}
