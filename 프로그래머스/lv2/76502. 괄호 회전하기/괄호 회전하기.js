function solution(s) {
    var answer = 0;
    const str = [...s];
    //전체를 확인해 본다.
    const map = {"[]":true,"{}":true,"()":true}
    const n = str.length;
    for(let i = 0; i<n; i++){
        const stack = [str[i]];
        for(let j = 1; j<n; j++){
            const sn = stack.length-1;
            if(sn>-1 && map[stack[sn]+str[(j+i)%n]]){
                stack.pop(); 
            }else{
                stack.push(str[(j+i)%n]);
            }
        }
        if(stack.length==0){
            answer++;
        }
    }
    return answer;
}