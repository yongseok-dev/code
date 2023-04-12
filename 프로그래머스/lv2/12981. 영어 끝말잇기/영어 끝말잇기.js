function solution(n, words) {
    var answer = [0,0];
    const dic = {};
    let char = words[0][0];
    for(let i=0; i<words.length; i++){
        const e = words[i];         
        if(e[0]===char){
            if(dic[e[0]]===undefined){
                dic[e[0]]=[e];
            }else if(dic[e[0]].indexOf(e)===-1){
                dic[e[0]].push(e);
            }else if(dic[e[0]].indexOf(e)>-1){
                answer = [((i%n)+1),Math.floor(i/n)+1];
                break;
            }
        }else{
            answer = [((i%n)+1),Math.floor(i/n)+1];
            break;
        }
        char=e[e.length-1];
    }

    return answer;
}