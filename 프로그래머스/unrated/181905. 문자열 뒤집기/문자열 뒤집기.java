class Solution {
    public String solution(String my_string, int s, int e) {
        String answer = "";
        String temp = "";
        for(int i=s; i<=e; i++){
            temp = my_string.charAt(i)+temp;
        }
        answer = my_string.substring(0,s)+temp+my_string.substring(e+1);
        return answer;
    }
}