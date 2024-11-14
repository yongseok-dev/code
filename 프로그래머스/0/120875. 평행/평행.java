class Solution {
    public int solution(int[][] dots) {
        int answer = 0;
        if(check(dots[0],dots[1])==check(dots[2],dots[3])||check(dots[2],dots[1])==check(dots[0],dots[3])){
            return 1;    
        }
        return answer;
    }
    public double check(int[] dot1, int[] dot2){
        return 1.0*(dot1[1]-dot2[1])/(dot1[0]-dot2[0]);
    }
}