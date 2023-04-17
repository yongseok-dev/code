const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().split("\n");
let l = 0;
const T = Number(input[l++]);

for (let j = 0; j < T; j++) {
  testCase();
}

function testCase() {
  let answer = 0;
  const [M, N, K] = input[l++].split(" ").map((e) => Number(e));
  const map = Array(N)
    .fill(true)
    .map((e) => Array(M).fill(0));

  for (let i = 0; i < K; i++) {
    const [x, y] = input[l++].split(" ").map((e) => Number(e));
    map[y][x] = 1;
  }
  // console.log(map);

  const dy = [1, 0, -1, 0];
  const dx = [0, 1, 0, -1];
  const check = (y, x) => {
    if (y >= N || y < 0 || x >= M || x < 0) {
      return false;
    }
    return true;
  };

  const dfs = (y, x) => {
    map[y][x] = 0;
    for (let i = 0; i < 4; i++) {
      const ny = y + dy[i];
      const nx = x + dx[i];
      if (check(ny, nx) && map[ny][nx] === 1) {
        dfs(ny, nx);
      }
    }
  };
  map.forEach((row, y) => {
    row.forEach((e, x) => {
      if (e === 1) {
        dfs(y, x);
        answer++;
      }
    });
  });
  console.log(answer);
}
