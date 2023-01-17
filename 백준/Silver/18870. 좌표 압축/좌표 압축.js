const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const n = input[0];
const arr = input[1].split(" ");

console.log(compression(arr));

function compression(arr) {
  const arrX = arr
    .map((e) => {
      return Number(e);
    })
    .sort((a, b) => {
      return a - b;
    });

  const obj = {};
  [...new Set(arrX)].forEach((element, index) => {
    if (!obj[element]) obj[element] = index;
  });

  return arr
    .map((e) => {
      return obj[e];
    })
    .join(" ");
}
