class Solution {
    public int solution(int a, int b) {
        int answer = 0;
        int case1 = a*((int) Math.pow(10,(1 + (int) Math.log10(b))))+b;
        int case2 = b*((int) Math.pow(10,(1 + (int) Math.log10(a))))+a;
        answer = case1>case2?case1:case2;
        return answer;
    }
}