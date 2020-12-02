export default function partTwo(array: string[]) {

  const smallNumObj: any  = {} 
  const medNumObj: any  = {} 
  const largeNumObj: any  = {}

// making the small, med, and large obj's @ 673 breakpoints ( 2020 / 3)

  for (let i = 0; i < array.length; i++) {
    const current : Number = parseInt(array[i])
    if (current <= 673) {
      smallNumObj[String(current)] = i
    } else if (current > 673 && current <= 1346) {
      medNumObj[String(current)] = i
    } else {
      largeNumObj[String(current)] = i
    }
  }

  // There are only three different number options it could be: 
  // 1. Small + Small + Medium,
  // 2. Small + Small + Large,
  // 3. Medium + Medium + Small ---> surprisingly this was the correct one

  const medPlusMed: string[][] = Object.keys(medNumObj)
  .map((firstNum: string) => Object.keys(medNumObj)
  .map((secondNum: string) => String(parseInt(firstNum) + parseInt(secondNum))))

  // making an array that finds the third value that solves the challenge
  // once you have the third value, the rest is just looking for matching values
  const findSmallNum : (string | undefined)[] =  medPlusMed
  .map((tripletPoss: string[]) => tripletPoss
  .find((twoMediumNums: string) => smallNumObj.hasOwnProperty(String(2020 - parseInt(twoMediumNums)))))

  // I now need the values of all three numbers so I can multiply them together for the final result
  const medPlusMedNum: (string | undefined) = findSmallNum[0]
  const thirdNum : number = 2020 - Number(findSmallNum[0])

  // Basically an exact copy from part one, but faster because I have a smaller array to work with
  const firstNum : (string | undefined) = Object.keys(medNumObj).find((n: string) => {
    return medNumObj.hasOwnProperty(Number(medPlusMedNum) - parseInt(n))
  })

  const secondNum : number  = Number(medPlusMedNum) - Number(firstNum)

  return Number(firstNum) * secondNum * thirdNum
  
}