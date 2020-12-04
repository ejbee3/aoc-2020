export default function partTwo(array : string[]) {

  const rowLength : number = array[0].length
  let treeCounts : number[] = Array(5).fill(0)
  
  const findTreeCount = (position : number, current : string) => {
    
      if (position > rowLength) {
        const rowRemain : number = position % rowLength
        if (current[rowRemain] === '#') {
          return 1
        }
      } else {
        if (current[position] === '#') {
          return 1
        }
    }
    return 0
  }
  
  for (let i : number = 1, r3 : number = 3, r5 : number = 5, r7 : number = 7; i < array.length; 
    i++, r3 += 3, r5 += 5, r7 += 7) {

    let d2 : number = 1

    treeCounts[0] += findTreeCount(i, array[i])
    treeCounts[1] += findTreeCount(r3, array[i])
    treeCounts[2] += findTreeCount(r5, array[i])
    treeCounts[3] += findTreeCount(r7, array[i])

    if (i % 2 === 0) {
      treeCounts[4] += findTreeCount(d2, array[i])
      d2++
    }
  }
  return treeCounts.reduce((product : number, trees : number) => product * trees, 1)
}