function solution(skill, skill_trees) {
    let answer = 0;
    const skills = {};
    [...skill].forEach((e,i)=>{
        skills[e] = i;
    })
    skill_trees.forEach(skillTree=>{
        let point = 0;
        let isPass = true;
        [...skillTree].forEach(skill=>{
            if(!skill){
            }else if(skills[skill]>point){
                isPass = false;
            }else if(skills[skill]===point){
                point++;
            }
        })
        if(isPass){
            answer++;
        }
    })
    return answer;
}