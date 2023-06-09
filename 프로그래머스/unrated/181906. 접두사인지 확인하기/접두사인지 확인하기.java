class Solution {
    public int solution(String my_string, String is_prefix) {
        int answer = 0;
        int n = my_string.length();
        int m = is_prefix.length();
        if(n-m>-1 && is_prefix.equals(my_string.substring(0,m))){
            answer++;
        }
        return answer;
    }
}