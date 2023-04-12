function solution(begin, target, words) {
    var answer = 0;    
    //검증 words 안에 없는 경우
    if(words.indexOf(target)===-1){
        return answer;
    }
    //가장 짧은 과정 -> bfs
    //데이터 셋
    words.push(begin);
    const adj = Array(words.length).fill(false).map(e=>Array(words.length).fill(false));
    const vis = Array(words.length).fill(false);
    const str = words.map(e=>e.split(""))
    str.forEach((e1,i1)=>{
        str.forEach((e2,i2)=>{
            if(i1!==i2){
                let count = 0;
                for(let i = 0; i<e1.length; i++){
                    if(e1[i]!==e2[i]) count++;
                }
                if(count===1) adj[i1][i2] = true;
            }
        })    
    })
    // console.log(adj)
    const bfs = ()=>{
        const queue = [];
        //시작 begin
        queue.push([begin,0]);
        while(queue.length>0){
            const [temp,d] = queue.shift();
            //종료 target
            if(temp===target) return d;
            
            for(let i=0; i<words.length; i++){
                if(adj[words.indexOf(temp)][i]&&!vis[i]){
                    vis[i]=true;
                    queue.push([words[i],d+1]);
                }
            }
        }
        //도착 X
        return 0;
    }
    answer = bfs()
    return answer;
}