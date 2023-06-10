class Solution {
    public int[] solution(String my_string) {
        int[] answer = new int[52];
        for(int i=0; i<my_string.length(); i++){
            char c = my_string.charAt(i);
            int index = (c>'Z')?(26+c-'a'):(c-'A');
            answer[index]++;
        }
        return answer;
    }
}