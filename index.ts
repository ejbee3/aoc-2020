import * as fs from 'fs';

const input = fs.readFileSync('./week-02/10/day-10-input.txt', 'utf8').split("\n").map(x => Number(x));

import 
weekTwoSolution from './week-02/10/01'

function runDay(solution: any) {
  return solution
}

console.log(runDay(weekTwoSolution(input)))

