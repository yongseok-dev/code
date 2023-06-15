class Solution {
    public int solution(String myString, String pat) {
        int answer = (myString.toUpperCase().indexOf(pat.toUpperCase())>-1)?1:0;
        return answer;
    }
}