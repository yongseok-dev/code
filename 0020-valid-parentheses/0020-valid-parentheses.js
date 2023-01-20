/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = []
    const set = {")":"(","]":"[","}":"{"}
    for(let i = 0; i < s.length; i++){
        if(stack.length>0 && stack[stack.length-1]===set[s[i]]){
           stack.pop()
       }else{
          stack.push(s[i])
       }
    }
    return stack.length===0
};