import java.util.*;

class Solution {
    public int[] solution(int[] num_list) {
        int n = 5;
        Arrays.sort(num_list);
        int[] answer = new int[n];
        for(int i=0; i<n; i++){
            answer[i] = num_list[i];
        }
        return answer;
    }
}