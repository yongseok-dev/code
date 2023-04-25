class Solution {
    public int solution(int[] date1, int[] date2) {
        int day1 = date1[0]*365+date1[1]*30+date1[2];
        int day2 = date2[0]*365+date2[1]*30+date2[2];
        int answer = day1<day2?1:0;
        return answer;
    }
}