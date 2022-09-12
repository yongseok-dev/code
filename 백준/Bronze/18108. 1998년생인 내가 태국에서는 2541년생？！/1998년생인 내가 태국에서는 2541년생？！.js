const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const conversionFactor = (2541-1998)
const year = input[0]-conversionFactor

console.log(year);