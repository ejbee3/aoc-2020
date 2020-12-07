import * as fs from 'fs';

const input = fs.readFileSync('./weekOne/daySix/day-6-input.txt', 'utf8').split(/\s/);

import 
weekOneSolution from './weekOne/daySix/partOne'

function runDay(solution: any) {
  return solution
}

console.log(runDay(weekOneSolution(input)))

