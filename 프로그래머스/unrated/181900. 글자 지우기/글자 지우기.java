import java.util.*;

class Solution {
    public String solution(String my_string, int[] indices) {
        String answer = "";
        String[] strings = my_string.split("");
        int check = 0;
        Arrays.sort(indices);
        for(int i=0; i<strings.length; i++){
            if(indices.length>check && i==indices[check]){
                check++;
            }else{
                answer+=strings[i];    
            } 
        }
        return answer;
    }
}