function solution(id_list, report, k) {
    var answer = Array(id_list.length).fill(0);
    const map = {};
    report.forEach(e=>{
        const [user1,user2] = e.split(" ");
        if(!map[user2]){
            map[user2] = {user:{},count:0};
        }
        if(!map[user2]["user"][user1]){
            map[user2]["count"]++;
            map[user2]["user"][user1] = true;
        }
    });
    Object.keys(map).filter(e=>{
        return map[e]["count"]>=k;
    }).forEach(e=>{
        // answer[id_list.indexOf(e)]++;
        Object.keys(map[e]["user"]).forEach(el=>{
            answer[id_list.indexOf(el)]++;
        })
    })
    return answer;
}