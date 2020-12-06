export default function partOne(array : string[]) {
 
  let validPassports : number = 0
  let validFieldCount : number = 0
  
  for (let i : number = 0; i < array.length; i++) {
    
    const currentKey : string = array[i].slice(0, 3)
    
    if (currentKey !== "cid" && currentKey.length !== 0) {
      validFieldCount += 1
    } else if (currentKey.length === 0) {
      if (validFieldCount >= 7) {
        validPassports++
      }
      validFieldCount = 0
    }
  }

  return validPassports
}