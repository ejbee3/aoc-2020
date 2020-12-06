export default function partTwo(array : string[]) {
  
  let validPassports : number = 0
  let validFieldCount : number = 0

  for (let i : number = 0; i < array.length; i++) {

    const currentKey : string = array[i].slice(0, 3)
    const currentVal : string = array[i].slice(4)

    switch (currentKey) {

      case "pid":
        if (currentVal.length === 9 && currentVal.match(/[0-9]/g)?.length === 9) {
          validFieldCount++
        }
        break

      case "byr":
        if (currentVal.length === 4 && Number(currentVal) >= 1920 && Number(currentVal) <= 2002) {
          validFieldCount++
        }
        break

      case "iyr":
        if (currentVal.length === 4 && Number(currentVal) >= 2010 && Number(currentVal) <= 2020) {
          validFieldCount++
        }
        break

      case "eyr":
        if (currentVal.length === 4 && Number(currentVal) >= 2020 && Number(currentVal) <= 2030) {
          validFieldCount++
        }
        break

      case "hgt":
        if (currentVal.slice(-2) === "cm") {
          const valCm : number = Number(currentVal.slice(0, 3))
          if (valCm >= 150 && valCm <= 193) {
            validFieldCount++
          }
        } else if (currentVal.slice(-2) === "in") {
          const valInches : number = Number(currentVal.slice(0, 2))
          if (valInches >= 59 && valInches <= 76) {
            validFieldCount++
          }
        }
        break

      case "hcl":
        if (currentVal.length === 7 && currentVal.match(/#[0-9a-f]+/)?.length === 1) {
          validFieldCount++
        }
        break
       
      case "ecl":
        if ("amb blu brn gry grn hzl oth".includes(currentVal)) {
          validFieldCount++
        }
        break
    }

    if (array[i].length === 0) {
      if (validFieldCount >= 7) {
        validPassports++
      }
      validFieldCount = 0
    }
  }

  return validPassports
}