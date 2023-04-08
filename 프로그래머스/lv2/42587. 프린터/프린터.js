function solution(priorities, location) {
    var answer = 0;
    let pointer = 0;
    const sort = [...priorities].sort((a,b)=>b-a);
    while(answer<priorities.length){
        const index = pointer%priorities.length;
        const temp = priorities[index];
        if(temp===sort[answer]){
            priorities[index]=0;
            answer++;
            if(index===location){
                return answer;
            }
        }
        pointer++;
    }
    return 0;
}