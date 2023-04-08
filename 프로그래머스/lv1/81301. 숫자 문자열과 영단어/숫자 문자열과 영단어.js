function solution(s) {
    var answer = s;
    const tansArray = [
	"zero",
	"one",
	"two",
	"three",
	"four",
	"five",
	"six",
	"seven",
	"eight",
	"nine"
    ]
    tansArray.forEach((e,i)=>{
        answer = answer.replaceAll(e,i);
    })
    return Number(answer);
}