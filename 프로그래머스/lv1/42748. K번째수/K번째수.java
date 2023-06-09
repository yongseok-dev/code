import java.util.*;

class Solution {
    public int[] solution(int[] array, int[][] commands) {
        int[] answer = new int[commands.length];
        for(int e=0; e<commands.length; e++){
            int[] command = commands[e];
            int i = command[0]-1;
            int j = command[1];
            int k = command[2]-1;
            int[] temp = new int[j-i];
            for(int m=0; m<temp.length; m++){
                temp[m] = array[m+i];
            }
            Arrays.sort(temp);
            answer[e] = temp[k];
        }
        return answer;
    }
}