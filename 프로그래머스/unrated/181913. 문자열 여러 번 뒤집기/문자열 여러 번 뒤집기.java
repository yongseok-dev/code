class Solution {
    public String solution(String my_string, int[][] queries) {
        String answer = my_string;
        for(int[] query:queries){
            int s = query[0];
            int e = query[1]+1;
            String temp = "";
            for(String st:answer.substring(s,e).split("")){
                temp = st+temp;
            }
            temp = answer.substring(0,s)+temp+answer.substring(e);
            answer = temp;
        }
        return answer;
    }
}