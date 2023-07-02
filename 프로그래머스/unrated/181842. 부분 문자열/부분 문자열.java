class Solution {
    public int solution(String str1, String str2) {
        int answer = 0;
        if(str2.replace(str1,"").length()!=str2.length()){
            answer++;
        }
        return answer;
    }
}