class Solution {
    public int solution(int[] num_list) {
        int answer = 0;
        int[] temp = new int[2];
        
        for(int i:num_list){
            temp[i%2] *= 10;
            temp[i%2] += i;
        }
        answer += temp[0];
        answer += temp[1];
        
        return answer;
    }
}