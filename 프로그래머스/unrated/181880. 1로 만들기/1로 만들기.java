class Solution {
    public int solution(int[] num_list) {
        int[] arr = new int[31];
        arr[1] = 0;
        arr[2] = 1;
        for(int i=3; i<arr.length; i++){
            if(i%2==0){
                arr[i] = arr[i/2]+1;
            }else{
                arr[i] = arr[i-1];
            }
        }
        int answer = 0;
        for(int i:num_list){
            answer += arr[i];
        }
        return answer;
    }
}