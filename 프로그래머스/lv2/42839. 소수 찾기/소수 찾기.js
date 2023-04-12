function solution(numbers) {
    const arr = Array(Math.pow(10,numbers.length)).fill(0).map((e,i)=>(i%2?i:0));
    arr[1]=0;
    arr[2]=2;
    for(let i=3;i<arr.length;i++){
        if(arr[i]==0) continue;
        for(let j=i*2;j<arr.length;j+=i){
            arr[j]=0;
        }
    }
    const check = {}
      arr.filter(e=>e!==0)
      .map(e=>e.toString().split("").sort())
      .map(e=>e.join(""))
      .forEach(e=>{check[e] = check[e]?check[e]+1:1;});
    
    var answer = 0;
    const number = numbers.split("").sort();
    
    const map = {}
    for(let i=1; i<Math.pow(2,numbers.length); i++){
        let j = i.toString(2);
        while(j.length<numbers.length){
            j="0"+j;
        }
        const temp = [];
        j.split("").forEach((e,index)=>{
            if(e==='1') temp.push(number[index]);
        })
        map[temp.join("")]=1;
    }
    Object.keys(map).forEach(e=>{
        answer += check[e]?check[e]:0;
    })
    return answer;
}