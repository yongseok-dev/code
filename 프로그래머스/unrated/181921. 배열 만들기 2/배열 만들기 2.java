import java.util.*;

class Solution {
    public int[] solution(int l, int r) {
        List<Integer> list = new ArrayList<>();
        for(int i=l; i<=r; i++){
            int temp = i;
            while(temp%10==0 || temp%10==5){
                temp /= 10;
                if(temp==0){
                    list.add(i);
                    break;
                }
            }
        }
        if(list.size()==0){
            list.add(-1);
        }
        int[] answer = new int[list.size()];
        for(int i=0; i<list.size(); i++){
            answer[i] = list.get(i);
        }
        return answer;
    }
}