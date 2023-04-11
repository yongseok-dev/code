function solution(maps) {
    const n = maps.length;
    const m = maps[0].length;
    const dy = [1,0,-1,0];
    const dx = [0,1,0,-1];
    const path = Array(n).fill(false).map(e=>Array(m).fill(false));
    
    function check(y,x){
        if(y<0||n<=y||x<0||m<=x) return false;
        return true;
    }
    
    function bfs(){
        const queue = [];
        path[0][0] = true;
        queue.push([0,0,1]);
        while(queue.length>0){
            const [y,x,d] = queue.shift();
            if(y===n-1&&x===m-1){
                return d;
            }
            for(let i=0; i<4; i++){
                const ny = y+dy[i];
                const nx = x+dx[i];    
                if(check(ny,nx)&&!path[ny][nx]&&maps[ny][nx]===1){
                    path[ny][nx] = true;
                    queue.push([ny,nx,d+1]);
                }
            }
        }
        return -1;
    }
    // function dfs(y,x){
    //     path[y][x]=true;
    //     for(let i=0; i<4; i++){
    //         const ny = y+dy[i];
    //         const nx = x+dx[i];    
    //         if(check(ny,nx)&&maps[ny][nx]===1&&!path[ny][nx]){
    //             answer++;
    //             if(ny===n&&nx===n){
    //                 return true;
    //             }
    //             return dfs(ny,nx);
    //         }
    //     }
    // }
    const answer = bfs()
    return answer;
}