class Solution {
    public int[] solution(int[] arr) {
        int n = 0;
        for(int i : arr){
            n+=i;
        }
        int[] answer = new int[n];
        int index = 0;
        for(int i=0; i<arr.length; i++){
            for(int j=0; j<arr[i]; j++){
                answer[index+j]=arr[i];
            }
            index+=arr[i];
        }
        return answer;
    }
}