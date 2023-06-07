import java.util.*;

class Solution {
    public int solution(int n, String control) {
        Map<String,Integer> map = new HashMap<>();
        map.put("w",1);
        map.put("s",-1);
        map.put("d",10);
        map.put("a",-10);
        int answer = n;
        for(String s:control.split("")){
            answer += map.get(s);
        }
        return answer;
    }
}