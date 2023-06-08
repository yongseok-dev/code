import java.util.*;

class Solution {
    public int[] solution(int n) {
        int temp = n;
        List<Integer> list = new ArrayList<>();
        
        while(temp>1){
            list.add(temp);
            temp = temp%2==0?(temp/2):(3*temp+1);
        }
        list.add(1);
        
        int[] answer = new int[list.size()];
        for(int i=0; i<list.size(); i++){
            answer[i] = list.get(i);
        }
        return answer;
    }
}