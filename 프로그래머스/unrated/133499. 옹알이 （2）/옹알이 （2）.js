function solution(babbling) {
    var answer = 0;
    const sound = ["aya", "ye", "woo", "ma"];
    babbling.forEach(e=>{
        let s = e;
        sound.forEach(el=>{
            s = s.replaceAll((el+el),"?");    
            s = s.replaceAll(el," ");
        })
        s = s.replaceAll(" ","");
        if(s==="") answer++;
    })
    
    return answer;
}