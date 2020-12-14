export default function partOne(array: string[]) {
  
  interface CountObj {
    [key : number] : number;
  }

  let acc : number = 0
  let jmpIdx : number = 0
  let idxCounts : CountObj = {}
  
  while(Object.values(idxCounts).find(x => x > 1) === undefined) { 
   
    let savedCmd : string = 'start'
     
      if (idxCounts[jmpIdx]) {
        idxCounts[jmpIdx] += 1
        return acc
      } else {
     
        idxCounts[jmpIdx] = 1
       
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
              jmpIdx -= (array.length - 1)
            }
          } else if (cmd === "jmp" && operator === '-') {
            jmpIdx -= num
            if (jmpIdx < 0) {
              jmpIdx += (array.length - 1)
            }
          } 
        }
      }
  }
 return acc
}