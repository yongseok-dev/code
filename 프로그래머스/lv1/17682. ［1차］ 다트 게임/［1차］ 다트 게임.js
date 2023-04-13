function solution(dartResult) {
    
    const point = dartResult.split(/[^0-9]/)
                            .filter(e=>e!=="")
                            .map(e=>Number(e));
    // console.log(point);
    let count = 0; 
    const map = {S:1,D:2,T:3};
    dartResult.replace(/[0-9]/ig,"")
              .split("")
              .forEach(e=>{
        if(Object.keys(map).indexOf(e)>-1){
            point[count] = Math.pow(point[count],map[e])
            count++
        }else if(e==="*"){
            point[count-1]*=2;
            if(count>1) point[count-2]*=2;
        }else if(e==="#"){
            point[count-1]*=(-1);
        }
    })
    var answer = point.reduce((a,b)=>a+b,0);
    return answer;
}