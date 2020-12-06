export default function partOne(array : string[]) {

  let seatIdArr : number[] = []

  const findSeatNum = (seatArr : string[], seatRange : number[]) => {

    for (let i : number = 0; i < seatArr.length; i++) {
      const rangeDiv : number = seatRange[1] - seatRange[0]
      if (seatArr[i] === 'B' || seatArr[i] === 'R') {
      seatRange[0] = Math.ceil(rangeDiv / 2) + seatRange[0]
      } else if (seatArr[i] === 'F' || seatArr[i] === 'L') {
      seatRange[1] = seatRange[1] - Math.ceil(rangeDiv / 2)
      }
    }

    if (seatRange[0] === seatRange[1]) {
      return seatRange[0]
    }
    
    return -1
  }

  const findSeatId = (boardingPass : string) => {

    const arr = [...boardingPass]

    const rowArr = arr.slice(0, 7)
    let rowRange: number[] = [0, 127]

    const colArr = arr.slice(7)
    let colRange: number[] = [0, 7]

    const rowSeatNum = findSeatNum(rowArr, rowRange)
    const colSeatNum = findSeatNum(colArr, colRange)

    return (rowSeatNum * 8) + colSeatNum
  }

  for (let i : number = 0; i < array.length; i++) {
    seatIdArr.push(findSeatId(array[i]))
  }
  
  return Math.max(...seatIdArr)
}

// rows => 0 - 127 (use 1 - 128 and subtract 1 after the calculation)
// F => 1 - 64, B => 65 - 128
// columns => 0 - 7 (use 1 - 8)
// BFFFBBFRRR: row 70, column 7, seat ID 567.
// FFFBBBFRRR: row 14, column 7, seat ID 119.
// BBFFBBFRLL: row 102, column 4, seat ID 820.