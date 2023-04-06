function solution(jobs) {
    let pointer = 0;
    let answer = 0;
    let time = 0;
    const array = [];
    const queue = [];
    while(array.length!=jobs.length){
        let isPush = false;
        while(pointer<jobs.length&&time>=jobs[pointer][0]){
            queue.push(jobs[pointer++]);
            isPush = true;
        }
        if(isPush&queue.length>1){
            queue.sort((a,b)=> b[1]-a[1]);//우선순위            
        }
        if(queue.length>0){
            const temp = queue.pop();
            array.push(temp);
            time += temp[1];
            answer += time-temp[0];
        }else{
            time++;
        }
    }
    return Number.parseInt(answer/jobs.length);
}