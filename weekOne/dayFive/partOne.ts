export default function partOne(array : string[]) {

  let seatIdArr : number[] = []

  const findSeatNum = (seatArr : string[], seatRange : number[]) => {

    for (let i : number = 0; i < seatArr.length; i++) {
      const rangeDiff : number = seatRange[1] - seatRange[0]
      if (seatArr[i] === 'B' || seatArr[i] === 'R') {
      seatRange[0] = Math.ceil(rangeDiff / 2) + seatRange[0]
      } else if (seatArr[i] === 'F' || seatArr[i] === 'L') {
      seatRange[1] = seatRange[1] - Math.ceil(rangeDiff / 2)
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

