function solution(players, callings) {
    var answer = [];
    const name = {};
    const rank = {};
    
    players.forEach((e,i)=>{
        name[i]=e;
        rank[e]=i;
    })
    
    callings.forEach(e=>{
        const n = rank[e]; //숫자
        const n1 = n-1;
        const e1 = name[n1];
        rank[e] = n1;
        rank[e1] = n;
        name[n1] = e;
        name[n] = e1;
    })
    
    for(let i=0; i<players.length; i++){
        answer.push(name[i]);
    }
    return answer;
}