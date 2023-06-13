class Solution {
    public int[] solution(int[] arr) {
        int start = -1;
        int end = -1;
        for(int i=0; i<arr.length; i++){
            if(arr[i]==2){
                if(start==-1){
                    start = i;
                }else{
                    end = i;
                }
            }
        }
        int n = (start==-1||end==-1)?1:(end-start+1);
        int[] answer = new int[n];
        if(start==-1){
            answer[0] = -1;
        }else if(end==-1){
            answer[0] = 2;
        }else{
            for(int i=start; i<=end; i++){
                answer[i-start] = arr[i];
            }
        }
        return answer;
    }
}