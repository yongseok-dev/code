class Solution {
    public int solution(String ineq, String eq, int n, int m) {
        int answer = 0;
        if(">".equals(ineq)&&"=".equals(eq)&&n>=m){
            answer++;            
        }else if("<".equals(ineq)&&"=".equals(eq)&&n<=m){
            answer++;            
        }else if(">".equals(ineq)&&"!".equals(eq)&&n>m){
            answer++;            
        }else if("<".equals(ineq)&&"!".equals(eq)&&n<m){
            answer++;            
        }
        return answer;
    }
}