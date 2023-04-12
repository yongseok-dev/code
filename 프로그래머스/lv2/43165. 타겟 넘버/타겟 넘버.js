function solution(numbers, target) {
    var answer = 0;
    //0. 데이터
    // 0>1>2>3>순인데... 부호만 설정하면 됨.
    //1. 방문
    const visited = [];
    //2. 스택
    const stack = [];
    //3. 함수
    function dfs(i){
        if(i<numbers.length){            
        visited.push(i);
        stack.push(numbers[i]);
        dfs(i+1);
        stack.push(-numbers[i]);
        dfs(i+1);
        visited.pop(i);
        }else{
            if(sum(stack)===target){
                // console.log(stack)
                answer++;
            }    
        }
        stack.pop();
    }
    //4. 실행
    dfs(0);
    
    return answer;
}
function sum(arr){
    return arr.reduce((a,b)=>a+b,0);
}