import java.util.*;

class Solution {
    public String solution(String s) {
        String answer = " ";
        String[] str = s.split(" ");
        int[] array = new int[str.length];
        for(int i = 0; i<str.length; i++){
            array[i]=Integer.parseInt(str[i]);
        }
        for(int i = 0; i<array.length-1; i++){
            boolean isChanged = false;
                for(int j = 1; j<array.length-i; j++){
                if(array[j-1]>array[j]){
                    int temp = array[j-1];
                    array[j-1] = array[j];
                    array[j] = temp;
                    isChanged = true;
                }
            }
            if(!isChanged){
                break;
            }            
        }
        answer = array[0]+answer+array[array.length-1];
        return answer;
    }
}