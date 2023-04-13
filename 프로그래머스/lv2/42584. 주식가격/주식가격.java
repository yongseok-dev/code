import java.util.*;
class Solution {
    public int[] solution(int[] prices) {
        int n = prices.length;
        int[] answer = new int[n];
        Stack<Integer> stack = new Stack<>();
        stack.push(0);
        
        for(int i=1; i<n; i++){
            int top = stack.get(stack.size()-1);
            while(stack.size()>0&&prices[top]>prices[i]){
                answer[top] = i-stack.pop();
                if(stack.size()==0) break;
                top = stack.get(stack.size()-1);
            }
            stack.push(i);
        }
        
        if(stack.size()>0){
            for(int i=0; i<stack.size(); i++){
                answer[stack.get(i)] = prices.length-1-stack.get(i);
            }
        }
        return answer;
    }
}