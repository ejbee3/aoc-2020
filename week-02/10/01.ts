export default function partOne(array: number[]) {
  
  let diffObj = { ones : 0, twos : 0, threes : 1}

  const sorted = array.sort((a, b) => a - b)
  
  for (let i : number = 0; i < sorted.length; i++) {
    const joltDiff = sorted[i + 1] - sorted[i]
    if (joltDiff === 1) {
      diffObj.ones += 1
    } else if (joltDiff === 2) {
      diffObj.twos += 1
    } else if (joltDiff === 3) {
      diffObj.threes += 1
    }
  }
  return diffObj.ones * diffObj.threes
}