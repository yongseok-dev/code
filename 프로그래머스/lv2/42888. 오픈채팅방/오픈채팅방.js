function solution(record) {
    var answer = [];
    const action = [];
    const user = [];
    const id = {}
    for(let i=0; i<record.length; i++){
        const str = record[i].split(" ");
        if(str[0]==="Leave"){
            action.push(0);
            user.push(str[1]);
            continue;
        }else if(str[0]==="Enter"){
            action.push(1);
            user.push(str[1]);
        }
        id[str[1]]=str[2];
    }
    for(let i=0; i<action.length; i++){
        answer.push(`${id[user[i]]}님이 ${(action[i]?"들어왔":"나갔")}습니다.`);
    }
    return answer;
}