function solution(rectangle, characterX, characterY, itemX, itemY) {
    var answer = 0;
    const mx = Math.max(...rectangle.map(e=>e[2]))*2;
    const my = Math.max(...rectangle.map(e=>e[3]))*2;
    const adj = Array(my+2).fill(true).map(e=>Array(mx+2).fill(0));
    rectangle.forEach(e=>{
        const [x1,y1,x2,y2] = e;
        for(let x=(x1*2);x<=(x2*2);x++){
            for(let y=(y1*2);y<=(y2*2);y++){
                adj[y][x] = 1;
            }   
        }
    })
    rectangle.forEach(e=>{
        const [x1,y1,x2,y2] = e;
        for(let x=(x1*2+1);x<(x2*2);x++){
            for(let y=(y1*2+1);y<(y2*2);y++){
                adj[y][x] = 0;
            }   
        }
    })
    
    const dy = [1,0,-1,0];
    const dx = [0,-1,0,1];
    
    const check = (y,x)=>{
        if(y<0||x<0||y>my||x>mx) return false;
        return true;
    }
    
    function bfs(){
        const queue = [];
        queue.push([characterY*2,characterX*2,0]);
        adj[characterY*2][characterX*2]=0;
        while(queue.length>0){
            // console.log(queue)
            const [y,x,d] = queue.shift();
            if(y===(itemY*2)&&x===(itemX*2)) return d;
            for(let i=0;i<4;i++){
                const ny = y+dy[i];
                const nx = x+dx[i];
                if(check(ny,nx)&&adj[ny][nx]){
                    // console.log(nx/2,ny/2,d+0.5)
                    adj[ny][nx]=0;
                    queue.push([ny,nx,d+0.5]);
                }
            }
        }
        return 0;
    }
    // console.log(adj)
    return bfs();
}