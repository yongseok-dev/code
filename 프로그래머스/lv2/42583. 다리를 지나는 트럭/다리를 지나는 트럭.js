function solution(bridge_length, weight, truck_weights) {
    var answer = 0;
    let time = 0;
    const truck_queue = [];
    const time_queue = [];
    while(truck_weights.length>0||truck_queue.length>0){
        if(time_queue[0]<=time){
            time_queue.shift();
            truck_queue.shift();
        }
        if((truck_weights[0]+truck_queue.reduce((a,b)=>a+b,0))<=weight){
            truck_queue.push(truck_weights.shift());
            time_queue.push(time+bridge_length);
        } 
        time++;
    }
    answer=time;
    return answer;
}