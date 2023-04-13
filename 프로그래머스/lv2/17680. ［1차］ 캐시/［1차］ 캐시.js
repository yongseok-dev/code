function solution(cacheSize, cities) {
    var answer = 0;
    const CACHE_HIT_TIME = 1;
    const CACHE_MISS_TIME = 5;
    
    const cache = [];
    const cacheIndex = [];
    
    cities.forEach((e,i)=>{
        const str = e.toUpperCase();
        const ci = cache.indexOf(str);
        if(ci>-1){
            answer += CACHE_HIT_TIME;
            cacheIndex[ci]=i;
        }else{
            answer += CACHE_MISS_TIME;
            if(cacheSize>0){
                if(cacheSize>cache.length){
                    cache.push(str);
                    cacheIndex.push(i);
                }else{
                    let min = cacheIndex[0];
                    let ti = 0;
                    cacheIndex.forEach((e,i)=>{
                        if(min>e){
                            min=e;
                            ti=i;
                        }
                    })
                    cache[ti]=str;
                    cacheIndex[ti]=i;
                }
            }
        }
        // console.log(str,cache,cacheIndex);        
    })
    
    return answer;
}