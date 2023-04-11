function solution(n, computers) {
    var answer = 0;
    const check = Array(n).fill(false);
    function dfs(now){
        check[now]=true;
        for(let next=0;next<n;next++){
            if(computers[now][next]>0&&!check[next]){
                dfs(next);             
                
            }
        }
    }
    for(let i=0; i<n; i++){
        if(!check[i]){
            dfs(i);   
            answer++;
        }
    }
    return answer;
}