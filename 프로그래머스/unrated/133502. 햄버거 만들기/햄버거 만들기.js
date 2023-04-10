function solution(ingredient) {
    //1231 -> 포장 후 최기 1 에서 시작
    let answer = 0;
    let one = [];
    for(let i = 0; i<ingredient.length; i++){     
        if(ingredient[i]===1&&ingredient[i+1]===2&&ingredient[i+2]===3&&ingredient[i+3]===1){
            answer++;
            ingredient.splice(i, 4);
            if(one.length>0){
                i = one.pop();
            }
            i--;
        }else if(ingredient[i]===1){
            one.push(i);
        }
    }    
    return answer;
    
//     var answer = 0;
//     let str = ingredient.join("").toString();
//     let temp = 0;
    
//     while(true){
//         temp = str.length
//         str = str.replace("1231","");
//         if(!(temp-str.length)){
//             break;
//         }
//         answer++;
//     }
    
//     return answer;
}