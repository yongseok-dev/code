class Solution {
    public int[] solution(int[] num_list) {
        int n = num_list.length+1;
        int[] answer = new int[n];
        for(int i=0; i<n-1; i++){
            answer[i] = num_list[i];
        }
        answer[n-1] = answer[n-3]>=answer[n-2]?answer[n-2]*2:answer[n-2]-answer[n-3];
        return answer;
    }
}