function solution(a, b) {
    var answer = '';
    const newA = a.length<b.length?b:a;
    const newB = a.length<b.length?a:b;

    const lengthA = newA.length;
    const lengthB = newB.length;
    
    const arr = [];
    
    for(let i = 0; i<lengthA; i++){
        arr[i] = newA[lengthA-1-i]*1;
    }
    for(let i = 0; i<lengthB; i++){
        arr[i] += newB[lengthB-1-i]*1;
    }
    for(let i = 0; i<arr.length; i++){
        if(arr[i]>9){
            arr[i] -= 10;
            arr[i+1] = arr[i+1]?arr[i+1]+1:1;
        }
    }
    for(let i = 0; i<arr.length; i++){
        answer = arr[i]+""+answer;
    }
    
    return answer;
}