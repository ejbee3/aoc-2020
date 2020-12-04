export default function partTwo(array : string[]) {

  const rowLength : number = array[0].length
  let treeCounts : number[] = Array(5).fill(0)
  for (let i : number = 1, r3 : number = 3, r5 : number = 5, r7 : number = 7;
    i < array.length; i++, r3+=3, r5+=5, r7+=7) {
      if (i > rowLength) {
        const rowRemain : number = i % rowLength
        if (array[i][rowRemain] === '#') {
          treeCounts[0]++
          // need to fix this test when you go down two
          // need a conditional when i is even and matches d2 increment
        } else if ( i % 2 === 0 && array[i][rowRemain] === '#') {
          treeCounts[4]++
        }
      } else if (r3 > rowLength) {
          const rowRemain : number = r3 % rowLength
          if (array[i][rowRemain] === '#') {
            treeCounts[1]++
        }
       } else if (r5 > rowLength) {
          const rowRemain : number = r5 % rowLength
         if (array[i][rowRemain] === '#') {
          treeCounts[2]++
        } 
    } else if (r7 > rowLength) {
      const rowRemain : number = r7 % rowLength
         if (array[i][rowRemain] === '#') {
          treeCounts[3]++
        } 
    } else {
      
      if (array[i][i] === '#') {treeCounts[0]++}
      else if (array[i][r3] === '#') {treeCounts[1]++}
      else if (array[i][r5] === '#') {treeCounts[2]++}
      else if (array[i][r7] === '#') {treeCounts[3]++}
      else if (i % 2 === 0 && array[i][i] === '#') {
        treeCounts[4]++
      }
    }
    
  }
  return treeCounts.reduce((product : number, trees : number) => product * trees, treeCounts[0])
}

// const rowLength : number = array[0].length
//   for (let i : number = 1, j : number = 3; i < array.length; i++, j+=3) {
//     if (j > rowLength) {
//       const rowRemain : number = j % rowLength
//       if (array[i][rowRemain] === '#') {
//         treeCount++
//       }
//     } else {
//         if (array[i][j] === '#') {
//           treeCount++
//         }
//     }
//   }
//   return treeCount