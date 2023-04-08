function solution(s) {
    const answer = [0,0];
    while(s.length>1){
        const count = s.length;
        s = s.replaceAll("0","");
        answer[1] += count-s.length;
        answer[0]++;
        s = s.length.toString(2);
    }
    return answer;
}