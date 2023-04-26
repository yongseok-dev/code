const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf-8").split("\n");
let answer = 0;
const count = new Map();
const trans = new Map();
let number = 9;

for (let i = 1; i < input.length; i++) {
  const element = input[i].trim();
  element.split("").forEach((e, idx) => {
    const digit = element.length - 1 - idx;
    count.set(e, (count.get(e) || 0) + Math.pow(10, digit));
  });
}

[...count.entries()]
  .sort((a, b) => b[1] - a[1])
  .forEach(([key, value]) => {
    trans.set(key, number--);
  });

for (let i = 1; i < input.length; i++) {
  const element = input[i].trim();
  element.split("").forEach((e, idx) => {
    answer += trans.get(e) * Math.pow(10, element.length - idx - 1);
  });
}

console.log(answer);