function solution(s, skip, index) {
    var answer = "";
    let alp = 'abcdefghijklmnopqrstuvwxyz';
    skip.split("").forEach(e=>{
        alp = alp.replace(e,"");
    }) 
    let alpx = ""
    alp.split("").forEach((e,i)=>{
        alpx+=alp[(i+index)%alp.length];
    })
    s.split("").forEach(e=>{
        answer+=alpx[alp.indexOf(e)];
    })
    return answer;
}