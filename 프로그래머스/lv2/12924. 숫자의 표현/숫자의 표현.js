function solution(n) {
    var answer = 1;
    let lp = 1;
    let rp = 2;
    let sum = 3;
    while(lp<rp && lp<n/2){
        if(sum<n){
            rp++;
            sum+=rp;
            continue;
        }
        if(sum===n){
            answer++;
        }
        sum-=lp;
        lp++;
    }
    return answer;
}