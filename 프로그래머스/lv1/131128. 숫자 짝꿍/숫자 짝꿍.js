function solution(X, Y) {
    var answer = '';
    const map = {0:0,1:0,2:0,3:0,4:0,5:0,6:0,7:0,8:0,9:0}
    X.split("").forEach(e=>{
        map[e]++;
    })
    Y.split("").sort((a,b)=>b-a).forEach(e=>{
        if(map[e]>0){
            map[e]--;
            answer+=e;
        }
    });
    
    if(answer===""){
        answer = "-1";
    }
    if(answer.replaceAll("0","").length===0){
        answer = "0";
    }
    return answer;
}