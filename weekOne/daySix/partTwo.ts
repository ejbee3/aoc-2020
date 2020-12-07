export default function partTwo(array: string[]) {

  interface GroupObj {
    [key : string] : number
  }

  let groupArr : string[] = []
  let total : number = 0
  let totalPeople : number = 0

  const findGroupTotal = (currentArray : string[], totalPeople : number) => {

    let groupTotalObj = currentArray.reduce<GroupObj>((allItems, item) => {
      if (item in allItems) {
        allItems[item]++
      } else {
        allItems[item] = 1
      }
      return allItems
    }, {})

    const everyoneCount : number = Object.values(groupTotalObj)
      .reduce((sum, val) => val === totalPeople ? sum += 1 : sum, 0)

    return everyoneCount
  }

  for (let i : number = 0; i < array.length; i++) {

    if (array[i].length === 0) {
      total += findGroupTotal(groupArr, totalPeople)
      totalPeople = 0
      groupArr = []
    } else if (i === array.length - 1){
      groupArr.push(...array[i])
      totalPeople += 1
      total += findGroupTotal(groupArr, totalPeople)
    } else {
      groupArr.push(...array[i])
      totalPeople += 1
    }
  }

  return total
}