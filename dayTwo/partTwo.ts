export default function dayTwoPartOne(array: string[]) {

  let count : number = 0
  
  const isValidPassword = (passwordStr: string) => {
    const regexLetterReqArr : (RegExpMatchArray | null) = passwordStr.match(/[a-z]/)
    const regexNumReqArr : (RegExpMatchArray | null) = passwordStr.match(/[0-9]+/g)
    if (regexLetterReqArr != null && regexNumReqArr != null) {
      const letterToMatch : string = regexLetterReqArr[0]
      const password = passwordStr.split(':')[1]

    return (password.charAt(Number(regexNumReqArr[0])) == letterToMatch &&
      password.charAt(Number(regexNumReqArr[1])) != letterToMatch) || 
      (password.charAt(Number(regexNumReqArr[0])) != letterToMatch &&
      password.charAt(Number(regexNumReqArr[1])) == letterToMatch)
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