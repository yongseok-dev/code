function solution(people, limit) {
    var answer = 0;
    people.sort((a,b)=>a-b);
    let pr = 0;
    let pl = people.length-1;
    while(pr<pl){
        if(people[pr]+people[pl]<=limit){
             pr++   
        }
        pl--;
        answer++;
        if(pr==pl){
            answer++;
            break;
        }
    }
    return answer;
}