class Solution {
    public int solution(String binomial) {
        String[] temp = binomial.split(" ");
        int answer = Integer.parseInt(temp[0]);
        if("+".equals(temp[1])){
            answer+=Integer.parseInt(temp[2]);
        }else if("-".equals(temp[1])){
            answer-=Integer.parseInt(temp[2]);
        }else if("*".equals(temp[1])){
            answer*=Integer.parseInt(temp[2]);
        }
        return answer;
    }
}