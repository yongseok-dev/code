function solution(numbers, hand) {
    const adj = {
        2:[3,1,0,1,2,1,2,3,2,3,4,4],//2
        5:[2,2,1,2,1,0,1,2,1,2,3,3],//5
        8:[1,3,2,3,2,1,2,1,0,1,2,2],//8
        0:[0,4,3,4,3,2,3,2,1,2,1,1],//0
    };
    const H = hand==="left"?"L":"R";
    var answer = '';
    const pos = {L:10,R:11};
    const map = {1:"L",4:"L",7:"L",
                 3:"R",6:"R",9:"R"};
    
    numbers.forEach(e=>{
        if(!!map[e]){
            answer+=map[e];
            pos[map[e]] = e;
            // console.log(e,"=>",pos,map[e])
        }else{
            const dl = adj[e][pos.L];
            const dr = adj[e][pos.R];
                
            if(dr>dl){
                answer+="L";
                pos.L=e;
            }else if(dr<dl){
                answer+="R";
                pos.R=e;
            }else{
                answer+=H;
                pos[H]=e;
            }
            // console.log(e,"=>",pos,dl,dr)
        }
    })    
    
    return answer;
}