import java.util.*;

class Solution {
    public int[] solution(int[] num_list, int n) {
        List<Integer> list = new ArrayList<>();
        
        for(int i=0; i<num_list.length; i++){
            if(i>=n) list.add(num_list[i]);
        }
        
        int[] answer = new int[num_list.length];
        for(int i=0; i<list.size(); i++){
            answer[i] = list.get(i);
        }
        for(int i=list.size(); i<num_list.length; i++){
            answer[i] = num_list[i-list.size()];
        }
                
        return answer;
    }
}