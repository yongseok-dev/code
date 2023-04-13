function solution(survey, choices) {
    const map = {R:0,T:0,C:0,F:0,J:0,M:0,A:0,N:0};
    survey.forEach((e,i)=>{
        const [type1,type2] = e.split("")
        const value = choices[i]-4;
        if(value<0) map[type1]-=value;
        else if(value>0) map[type2]+=value;
    })
    
    var answer = (map["R"]>=map["T"]?'R':'T')
                +(map["C"]>=map["F"]?'C':'F')
                +(map["J"]>=map["M"]?'J':'M')
                +(map["A"]>=map["N"]?'A':'N');
    return answer;
}