export default function partTwo(array: string[]) {

  interface CountObj {
    [key : number] : number;
  }
  
  while(true) { 
   
    let savedCmd : string = 'start'
    let saveStateObj: CountObj = {}
    let saveStateArr: object[] = []
    let jmpIdx : number = 0
    let acc : number = 0

       
    const cmd = array[jmpIdx].slice(0, 3)
    const operator = array[jmpIdx].charAt(4)
    const num : number = Number(array[jmpIdx].slice(5))
      
    if (savedCmd === 'jmp' || cmd === 'nop') {
      jmpIdx++
    } else if (savedCmd === 'start' || cmd === 'acc') {
      savedCmd = cmd
      if (cmd === "acc" && operator === '+') {
        acc += num
        jmpIdx++
      } else if (cmd === "acc" && operator === '-') {
        acc -= num
        jmpIdx++
      } else if (cmd === "jmp" && operator === '+') {
        jmpIdx += num
        if (jmpIdx > array.length - 1) {
          return acc
        }
      } else if (cmd === "jmp" && operator === '-') {
        saveStateObj[jmpIdx] = acc
        saveStateArr.push(saveStateObj)
        saveStateObj = {}
        jmpIdx++
        if (saveStateArr.length > 1) {
          jmpIdx = Number(Object.keys(saveStateArr[0])[0])
          acc = Object.values(saveStateArr[0])[0]
          saveStateArr = []
        } else {
          jmpIdx -= num
        }
      } 
    }  
  }
}

// 351 is TOO LOW
// giving up on this one for now