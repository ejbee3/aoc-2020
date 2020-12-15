import partOne from './01'

export default function partTwo(array: number[]) {

//   const smolStr = `35
// 20
// 15
// 25
// 47
// 40
// 62
// 55
// 65
// 95
// 102
// 117
// 150
// 182
// 127
// 219
// 299
// 277
// 309
// 576`

//   const smolArr = smolStr.split('\n').map(x => Number(x))

//   const smolSolution = (array: number[]) => {

//     let preamble : number[] = array.slice(0, 5)

//     for (let i : number = 5; i < array.length; i++) {

//       const preambleSumMap : number[][] = preamble.map(x => preamble.map(y => x + y))
//       const findValidSums : (number | undefined)[] = preambleSumMap.map(sums => sums.find(sum => sum === array[i]))
//       const isValidSum : Boolean = findValidSums.filter(x => x !== undefined).length > 0

//       if (isValidSum) {
//         preamble = array.slice(i - 4, i + 1)
//       } else {
//         return [i, array[i]]
//       }
//     }
//   return [0, 0]
//   }
  

  const [ ansIdx, ansVal ] : number[] = partOne(array)

  // get shortened list of potential consecutive values
  const filteredList = array.slice(0, ansIdx).filter(x => x < ansVal)
  // loop through the list while sum !== ansVal

  let sum : number = 0
  let consecArr : number[] = []
  let index : number = 0
  let startingIdx : number = 0

  while (sum !== ansIdx) {
    sum += filteredList[index]
    
    if (sum < ansVal) {
      consecArr.push(filteredList[index])
      if (consecArr.length === 1) {
        startingIdx = index
      }
      index++
    } else if (sum > ansVal) {
      sum = 0
      consecArr = []
      index = startingIdx + 1
    } else {
      const sorted = consecArr.sort((a, b) => a - b)
      return sorted[sorted.length - 1] + sorted[0]
    }
  }
  return 0
}