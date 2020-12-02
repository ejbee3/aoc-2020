import * as fs from 'fs';

const input = fs.readFileSync('./dayOne/inputs/input_day_one_part_one.txt', 'utf8').split('\n');

import dayOnePartTwo from './dayOne/partTwo'

function runDay(solution: any) {
  return solution
}

console.log(runDay(dayOnePartTwo(input)))

