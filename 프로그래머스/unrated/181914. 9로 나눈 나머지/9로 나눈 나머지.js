function solution(number) {
    var answer = number.split("").map(e=>Number(e)).reduce((a,b)=>a+b,0)%9;
    return answer;
}