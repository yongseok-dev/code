function solution(dirs) {
    const map = {};
    const control = {R:[0,1],L:[0,-1],D:[-1,0],U:[1,0]};
    var answer = 0;
    const point = [0,0];
    const setPoint = (y,x)=>{
        point[0] = y;
        point[1] = x;
    }
    const check = (y,x)=>{
        if(y>5||y<-5||x>5||x<-5) return false;
        return true;
    }
    
    [...dirs].forEach(e=>{
        const [dy,dx] = control[e];
        const [y,x] = point;
        if(check((y+dy),(x+dx))){
            map[(y)+"."+(x)+"."+(y+dy)+"."+(x+dx)] = 1;
            map[(y+dy)+"."+(x+dx)+"."+(y)+"."+(x)] = 1;
            setPoint(y+dy,x+dx);
        }
    })
    
    answer = Object.keys(map).length/2;
    return answer;
}