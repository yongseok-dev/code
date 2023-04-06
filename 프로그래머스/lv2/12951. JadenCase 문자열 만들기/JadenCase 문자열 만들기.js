function solution(s) {
    const arr = s.toLowerCase().split(" ");
    for(let i = 0; i<arr.length; i++){
        const word = arr[i];
        arr[i]=word.replace(word.charAt(0),word.charAt(0).toUpperCase());
    }
    var answer = arr.join(" ");
    return answer;
}