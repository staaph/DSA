export const mergeSortedArrays = (
  array1: number[],
  array2: number[]
): number[] => {
  const mergedArray = []
  let array1Item = array1[0]
  let array2Item = array2[0]
  let i = 1
  let j = 1

  if (array1.length === 0) {
    return array2
  }
  if (array2.length === 0) {
    return array1
  }

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
      mergedArray.push(array1Item)
      array1Item = array1[i]
      i++
    } else {
      mergedArray.push(array2Item)
      array2Item = array2[j]
      j++
    }
  }
  return mergedArray
}

export const mergeSortedArrays2 = (arr1: number[], arr2: number[]): number[] =>
  [...arr1, ...arr2].sort((a, b) => a - b)
