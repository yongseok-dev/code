function solution(s)
{
    let pointer = 0;
    const arr = s.split("");    
    const stack = [];
    // stack 구현
    stack.push(arr.pop())
    for(let i = 1; i<s.length; i++){
        const temp = arr.pop();
        if(stack[pointer] == temp){
            stack.pop();
            pointer--;
        }else{
            stack.push(temp);
            pointer++;
        }
    }
    const answer = stack.length>0?0:1;
    return answer;
}