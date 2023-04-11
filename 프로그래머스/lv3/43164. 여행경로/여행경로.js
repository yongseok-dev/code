function solution(tickets) {
    //끝까지 돌도록 dfs
    const airport = ["ICN"];
    tickets.map(e=>e[1]).forEach(e=>{
        if(airport.indexOf(e)===-1){
            airport.push(e);
        }
    })
    airport.sort();
    const adj = Array(airport.length).fill(0).map(e=>{
        return Array(airport.length).fill(0);
    })
    tickets.forEach(e=>{
        const [ap0,ap1] = e;
        adj[airport.indexOf(ap0)][airport.indexOf(ap1)]++;
    })
    // console.log(adj,airport)
    
    let ticketsCount = tickets.length;
    var answer = [];   
    
    function dfs(start){
        answer.push(start);
        if(answer.length==ticketsCount+1) return true;
        
        let isOk = false;
        for(let i = 0; i<airport.length; i++){
            if(adj[airport.indexOf(start)][i]>0){
                isOk = true;
                adj[airport.indexOf(start)][i]--;
                if(dfs(airport[i])) return true;
                isOk = false;                                
                adj[airport.indexOf(start)][i]++;
            }
        }
        if(!isOk&&answer.length<ticketsCount){
            answer.pop(); 
            return false;
        }
    }
    dfs("ICN")
    return answer;
}