function solution(order) {
    let answer = 0;
    const stack = [];
    const queue = order.map((_,i)=>(1+i));
    let pointer = 0;
    while(answer<order.length&&pointer<=order.length){
        // console.log(pointer,order[answer],stack,queue[pointer],"=>",answer)
        if(stack.length>0&&stack[stack.length-1]===order[answer]){
            stack.pop();
            answer++;
        }else if(queue[pointer]===order[answer]){
            pointer++;
            answer++;
        }else{
            stack.push(queue[pointer]);
            pointer++;
        }
    }
    return answer;
}