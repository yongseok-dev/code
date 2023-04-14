function solution(clothes) {
    var answer = 1;
    const map = {};
    
    clothes.forEach(e=>{
        const [name,type] = e;
        if(!map[type]){
            map[type]=[""];
        }
        map[type].push(name);
    })
    Object.keys(map).forEach(e=>{
        answer*=map[e].length;
    })
    return answer-1;
}