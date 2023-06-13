class Solution {
    public int[] solution(int[] arr, int[] query) {
        int a = 0;
        int b = arr.length-1;
        
        for(int i=0; i<query.length; i++){
            if(i%2==0){
                b = a+query[i];                
            }else{
                a = a+query[i];
            }
        }
        
        int[] answer = new int[b-a+1];
        for(int i=a; i<=b; i++){
            answer[i-a] = arr[i];
        }
        return answer;
    }
}