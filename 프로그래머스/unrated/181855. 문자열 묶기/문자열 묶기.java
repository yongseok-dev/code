import java.util.*;

class Solution {
    public int solution(String[] strArr) {
        int max = 0;
        for(int i=0; i<strArr.length; i++){
            max = Math.max(max,strArr[i].length());
        }
        int[] countArr = new int[max+1];
        for(int i=0; i<strArr.length; i++){
            countArr[strArr[i].length()]++;
        }
        int countMax = 0;
        for(int i=0; i<max+1; i++){
            countMax = Math.max(countMax,countArr[i]);
        }
        int answer = countMax;
        return answer;
    }
}