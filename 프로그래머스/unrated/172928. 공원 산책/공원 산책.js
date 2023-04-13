function solution(park, routes) {
    var answer = [0,0];
    const size = {y:park.length,x:park[0].length};
    const map = Array(size.y).fill(0).map(()=>Array(size.x).fill(true))
    const op = {S:[+1,0],E:[0,+1],N:[-1,0],W:[0,-1]};
    
    park.forEach((row,y)=>{
        row.split("").forEach((e,x)=>{
            if("S"===e){
                answer = [y,x];
            }else if("X"===e){
                map[y][x] = false;
            }
        })
    });
    // console.log(park);
    
    function check(y,x){
        if(size.y<=y||size.x<=x||y<0||x<0) return false;
        return true;
    }
    routes.forEach(e=>{
        let [y,x] = answer;
        let isPossible = true;
        for(let i=0; i<e[2]; i++){
            y = y+op[e[0]][0];
            x = x+op[e[0]][1];
            if(!check(y,x)||!map[y][x]){
                isPossible=false;
                break;
            }
            // console.log(y,x,park[y][x],map[y][x])
        }
        if(isPossible) answer = [y,x];
        
    })
    return answer;
}