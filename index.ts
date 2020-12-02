import * as fs from 'fs';

const input = fs.readFileSync('./dayTwo/day-two-input.txt', 'utf8').split('\n');

import dayTwoPartOne from './dayTwo/partOne'

function runDay(solution: any) {
  return solution
}

console.log(runDay(dayTwoPartOne(input)))

