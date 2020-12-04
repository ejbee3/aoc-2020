export default function partOne(array : string[]) {
  let treeCount : number = 0
  const rowLength : number = array[0].length
  for (let i : number = 1, j : number = 3; i < array.length; i++, j+=3) {
    if (j > rowLength) {
      const rowRemain : number = j % rowLength
      if (array[i][rowRemain] === '#') {
        treeCount++
      }
    } else {
        if (array[i][j] === '#') {
          treeCount++
        }
    }
  }
  return treeCount
}