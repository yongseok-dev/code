class Solution {
    public int solution(int[] num_list) {
        int sum = 0;
        int pro = 1;
        for(int i:num_list){
            sum+=i;
            pro*=i;
        }
        int answer = -1;
        if(sum*sum>pro) answer = 1;
        if(sum*sum<pro) answer = 0;
        return answer;
    }
}