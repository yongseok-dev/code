const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const piece = [1, 1, 2, 2, 2, 8]
const answer = []
for (let index = 0; index < piece.length; index++) {
    answer.push(piece[index]-input[index]);
}
console.log(answer.join(" "));

