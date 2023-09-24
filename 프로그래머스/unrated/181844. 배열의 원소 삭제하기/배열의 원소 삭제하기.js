function solution(arr, delete_list) {
    var answer = [];
    for(let i=0; i<arr.length; i++){
        let flag = true;
        for(let j=0; j<delete_list.length; j++){
            if(arr[i]==delete_list[j]){
                flag = false; 
                break;
            }
        }
        if(flag){
            answer.push(arr[i]);
        }
    }
    return answer;
}