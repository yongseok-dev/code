/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let result = ""
    
    for(let i = 0; i < strs[0].length; i++){
        let count = 0 
        for(let j = 0; j<strs.length; j++){
            if(strs[j][i]===strs[0][i]){
                count++
            }else{
                break
            }
        }
        if(count===strs.length){
           result += strs[0][i]
       }else{
           break
       }
    }
    
    return result
};