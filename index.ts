import * as fs from 'fs';

const input = fs.readFileSync('./weekOne/dayThree/day-three-input.txt', 'utf8').split('\n');

import dayThreePartTwo from './weekOne/dayThree/partTwo'

function runDay(solution: any) {
  return solution
}

console.log(runDay(dayThreePartTwo(input)))

