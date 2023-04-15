function solution(k, dungeons) {
    let h = k;
    const point = [];
    const vis = [];
    
    //완탐 -> DFS.
    const bfs = (start)=>{
        vis.push(start);
        h-=dungeons[start][1];
        for(let i=0; i<dungeons.length; i++){
            if(h>0&&h>=dungeons[i][0]&&vis.indexOf(i)===-1){
                bfs(i);
            }
        }
        point.push(vis.length);
        h+=dungeons[vis.pop()][1];
    }
    for(let i=0; i<dungeons.length; i++){
        bfs(i);
        vis.pop();
        answer = 0;
        h = k;
    }
    return Math.max(...point);
}