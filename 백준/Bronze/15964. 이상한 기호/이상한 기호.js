const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);

console.log(calculation(a, b));

//A＠B = (A+B)×(A-B)
function calculation(a, b) {
  return (a + b) * (a - b);
}
