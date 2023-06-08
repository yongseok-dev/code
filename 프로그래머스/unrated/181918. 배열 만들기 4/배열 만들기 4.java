class Solution {
    public int[] solution(int[] arr) {
        int[] temp = new int[arr.length];
        int top = -1;
        
        for(int i=0; i<arr.length; i++){
            if(top==-1){
                top++;
                temp[top] = arr[i];
            }else if(temp[top]<arr[i]){
                top++;
                temp[top] = arr[i];
            }else{
                temp[top] = 0;
                top--;
                i--;
            }
        }
        
        int[] stk = new int[top+1];
        for(int i=0; i<stk.length; i++){
            stk[i] = temp[i];
        }
        return stk;
    }
}