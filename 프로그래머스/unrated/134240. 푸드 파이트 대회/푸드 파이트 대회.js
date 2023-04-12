function solution(food) {
    var answer = '0';
    const arr = food.map(e=>Math.floor(e/2));
    for(let i=arr.length-1;i>-1;i--){
        const str = (i).toString().repeat(arr[i]);
        answer = str+answer+str;
    }
    return answer;
}