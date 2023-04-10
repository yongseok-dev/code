function solution(k, tangerine) {
    //map에 담고 갯수로 정렬해 많은 것 부터 담아서 최소를 만든다.
    var answer = 0;
    const map = {};
    tangerine.forEach(e=>{
        if(!map[e]){
            map[e] = 1;
        }else{
            map[e]++;
        }
    })
    const arr = Object.values(map).sort((a,b)=>a-b);
    while(k>0){
        k-=arr.pop();
        answer++;
    }
    
    return answer;
}