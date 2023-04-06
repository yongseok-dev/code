function solution(jobs) {
    var answer = 0;
    const queue = [];
    let point = 0;
    let count = 0;
    let time = 0;
    jobs.sort((a,b) => a[0]-b[0]);
    while(count<jobs.length){
        let isPush = false;
        while(point<jobs.length&&time>=jobs[point][0]){
            queue.push(jobs[point++]);
            isPush = true;
        }
        if(isPush&&queue.length>1){
            queue.sort((a,b) => b[1]-a[1]);
        }
        if(queue.length>0){
            const temp = queue.pop();
            time += temp[1];
            answer += (time-temp[0]);
            count++;
        }else{
            time++;
        }
    }
    return Math.floor(answer/count);
}