import java.util.*;
class Solution {
    public String[] solution(String myString) {
        String[] temp = myString.split("x");
        Arrays.sort(temp);
        int count = 0;
        for(String s:temp){
            if(s.length()==0) count++;
        }
        String[] answer = new String[temp.length-count];
        for(int i=0; i<answer.length; i++){
            answer[i] = temp[i+count];
        }
        return answer;
    }
}