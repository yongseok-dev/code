function solution(today, terms, privacies) {
    var answer = [];
    const map = {};
    terms.forEach(e=>{
        const [e1,e2] = e.split(" ");
        map[e1]=Number(e2);
    });
    // console.log(map);
    
    const [ty,tm,td] = today.split(".").map(e=>Number(e));
    // console.log(ty,tm,td);
    
    privacies.forEach((e,i)=>{
        const [date, type] = e.split(" ");
        const [y,m,d] = date.split(".").map(e=>Number(e));
        // console.log(y,m,d,map[type]);
        
        const df = (y-2000)*12*28+(m+map[type])*28+d;
        const dt = (ty-2000)*12*28+tm*28+td;
        // console.log(df,dt);

        // 만료 <= 오늘 : 파기대상
        if(df<=dt){
            answer.push(i+1);
        }
    })
    return answer;
}