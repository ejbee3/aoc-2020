import * as fs from 'fs';

const input = fs.readFileSync('./dayTwo/day-two-input.txt', 'utf8').split('\n');

import dayTwoPartTwo from './dayTwo/partTwo'

function runDay(solution: any) {
  return solution
}

console.log(runDay(dayTwoPartTwo(input)))

