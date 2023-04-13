function solution(wallpaper) {
    //좌상 우하 좌표 출력
    let y1 = wallpaper.length-1; //최소
    let x1 = wallpaper[0].length-1; //최소
    let y2 = 0; //최대
    let x2 = 0; //최대
    wallpaper.forEach((row,y)=>{
        row.split("").forEach((e,x)=>{
            if(e==="#"){
                y1 = y1>y?y:y1;
                x1 = x1>x?x:x1;
                y2 = y>y2?y:y2;
                x2 = x>x2?x:x2;
            }
        })
    })
    var answer = [y1,x1,y2+1,x2+1];
    return answer;
}