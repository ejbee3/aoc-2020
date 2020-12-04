import * as fs from 'fs';

const input = fs.readFileSync('./weekOne/dayTwo/day-two-input.txt', 'utf8').split('\n');

import dayTwoPartTwo from './weekOne/dayTwo/partTwo'

function runDay(solution: any) {
  return solution
}

console.log(runDay(dayTwoPartTwo(input)))

