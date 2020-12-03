export default function dayTwoPartOne(array: string[]) {

  let count : number = 0
  
  const isValidPassword = (passwordStr: string) => {
    const regexLetterReqArr : (RegExpMatchArray | null) = passwordStr.match(/[a-z]/)
    const regexNumReqArr : (RegExpMatchArray | null) = passwordStr.match(/[0-9]+/g)
    if (regexLetterReqArr != null && regexNumReqArr != null) {
      const letterToMatch : string = regexLetterReqArr[0]
      const passwordLetterCount : number = [...passwordStr.split(':')[1]].reduce((total, current) => current == letterToMatch ?
        total += 1 : total, 0)
      return passwordLetterCount >= Number(regexNumReqArr[0]) && 
        passwordLetterCount <= Number(regexNumReqArr[1])
  } 
    return false
  }
  for (let i: number = 0; i < array.length; i++) {
    if (isValidPassword(array[i])) {
      count += 1
    }
  }
  return count
}
  