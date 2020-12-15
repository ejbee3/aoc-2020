export default function partOne(array: number[]) {
 
  let preamble : number[] = array.slice(0, 25)

  for (let i : number = 25; i < array.length; i++) {

    const preambleSumMap : number[][] = preamble.map(x => preamble.map(y => x + y))
    const findValidSums = preambleSumMap.map(sums => sums.find(sum => sum === array[i]))
    const result = findValidSums.filter(x => x !== undefined).length > 0

    if (result) {
      preamble = array.slice(i - 24, i + 1)
    } else {
      return array[i]
    }
  }
  return true
}

