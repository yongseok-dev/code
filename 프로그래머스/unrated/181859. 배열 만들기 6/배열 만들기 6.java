import java.util.*;

class Solution {
    public int[] solution(int[] arr) {
        List<Integer> list = new ArrayList<>();
        int i = 0;
        while(i<arr.length){
            if(list.size()==0){
                list.add(arr[i++]);
            }else if(arr[i]==list.get(list.size()-1)){
                list.remove(list.size()-1);
                i++;
            }else{
                list.add(arr[i++]);
            }
        }
        
        int[] answer = new int[list.size()>0?list.size():1];
        if(list.size()==0){
            answer[0] = -1;
        }else{
            for(int j=0; j<answer.length; j++){
                answer[j] = list.get(j);
            }
        }
        
        return answer;
    }
}