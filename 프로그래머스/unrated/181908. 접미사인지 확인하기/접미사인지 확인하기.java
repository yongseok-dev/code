class Solution {
    public int solution(String my_string, String is_suffix) {
        int answer = 0;
        int n = my_string.length();
        int m = is_suffix.length();
        if(n-m>-1 && is_suffix.equals(my_string.substring(n-m))){
            answer = 1;
        }
        return answer;
    }
}