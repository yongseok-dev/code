function solution(picture, k) {
    const answer = [];
    picture.map(e=>{
        let str = "";
        for(let i=0; i<e.length; i++){
            for(let j=0; j<k; j++){
                str+=e[i];
            }
        }
        for(let i=0; i<k; i++){
            answer.push(str);
        }
    })
    return answer;
}