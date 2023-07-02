class Solution {
    public int solution(String my_string, String target) {
        int answer = 0;
        if(my_string.replace(target,"").length()!=my_string.length()){
            answer++;
        }
        return answer;
    }
}