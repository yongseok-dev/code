/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if(s.length!==t.length) return false
    const counter={}
    for(let e of [...s]){
        counter[e] = ++counter[e] || 1
    }
    for(let e of [...t]){
        if(!counter[e]) return false
        counter[e]=--counter[e]
    }
    return true
};