export default function partOne(array: string[]) {

  let total : number = 0
  let groupArr : string[] = []

  for (let i : number = 0; i < array.length; i++) {
    if (array[i].length === 0) {
      const groupSet = new Set(groupArr)
      total += groupSet.size
      groupArr = []
    } else if (i === array.length - 1){
      groupArr.push(...array[i])
      const groupSet = new Set(groupArr)
      total += groupSet.size
    } else {
      groupArr.push(...array[i])
    }
  }
  return total
}
