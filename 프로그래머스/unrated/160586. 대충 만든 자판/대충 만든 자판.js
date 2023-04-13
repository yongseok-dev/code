function solution(keymap, targets) {
    var answer = Array(targets.length).fill(0);
    // console.log(answer);

    const map = {}
    keymap.forEach((e,i)=>{
        e.split("").forEach((el,j)=>{
            if(!map[el]) map[el]=j+1;
            map[el] = map[el]>j+1?j+1:map[el];
        })
    })
    // console.log(map);
    targets.forEach((e,i)=>{
        let isNaN = false;
        e.split("").forEach(el=>{
            if(!map[el]) isNaN=true;
            answer[i]+=map[el];
        })
        if(isNaN) answer[i] = -1;
    })
    return answer;
}