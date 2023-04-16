function solution(word) {
    const map = ['A', 'E', 'I', 'O', 'U'];
    var answer = [];
    map.forEach(e1=>{
        answer.push(e1);
        map.forEach(e2=>{
            answer.push(e1+e2);
            map.forEach(e3=>{
                answer.push(e1+e2+e3);
                map.forEach(e4=>{
                    answer.push(e1+e2+e3+e4);
                    map.forEach(e5=>{
                        answer.push(e1+e2+e3+e4+e5);
                    });
                });
            });
        });
    });
    answer.sort();
    return answer.indexOf(word)+1;
}