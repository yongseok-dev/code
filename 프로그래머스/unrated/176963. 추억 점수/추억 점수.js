function solution(name, yearning, photo) {
    var answer = [];
    const nameYear = {}
    for(let i=0; i<name.length; i++){
        nameYear[name[i]]=yearning[i];
    }
    photo.forEach(element=>{
        answer.push(element.map(a=>nameYear[a]?nameYear[a]:0).reduce((a,b)=>a+b,0));
    })
    return answer;
}