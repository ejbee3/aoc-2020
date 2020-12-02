const fs = require('fs')

const input = fs.readFileSync('./inputs/input_day_one_part_one.txt', 'utf8').split('\n');

const partOne = array => { 
  let obj = {}
  for (let i = 0; i < array.length; i++) {
    const current = array[i]
    obj[current] = i
  }
  const secondNum = array.find(n => {
    return obj.hasOwnProperty(String(2020 - n))
  })
  return (2020 - secondNum) * Number(secondNum)

}

// console.time()

// partOne(input)

// console.timeEnd()