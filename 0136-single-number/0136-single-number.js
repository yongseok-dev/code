/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let answer
    const obj = {}
    nums.forEach(e=>{
        if(!obj[e]){
            obj[e] = 1
       }else{
           obj[e]++
       }
    })
    
    Object.keys(obj).forEach(e=>{
        if(obj[e] === 1){
            answer = +e
        }
    })
    return answer
};