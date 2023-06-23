import java.util.*;

class Solution {
    public int[] solution(int[] num_list) {
        int[] sortedList = new int[num_list.length];
        for(int i=0; i<sortedList.length; i++){
            sortedList[i] = num_list[i];
        }
        Arrays.sort(sortedList);
        
        int[] answer = new int[num_list.length-5];
        for(int i=0; i<answer.length; i++){
            answer[i] = sortedList[i+5];
        }
        return answer;
    }
}