import * as fs from 'fs';

const input = fs.readFileSync('./week-02/09/day-9-input.txt', 'utf8').split("\n").map(x => Number(x));

import 
weekTwoSolution from './week-02/09/02'

function runDay(solution: any) {
  return solution
}

console.log(runDay(weekTwoSolution(input)))

