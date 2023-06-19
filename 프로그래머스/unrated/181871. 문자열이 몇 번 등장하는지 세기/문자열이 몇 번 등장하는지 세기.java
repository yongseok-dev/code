class Solution {
    public int solution(String myString, String pat) {
        int answer = 0;
        for(int i=0; i<=myString.length()-pat.length(); i++){
            int temp = pat.length();
            for(int j=0; j<pat.length(); j++){
                if(myString.charAt(i+j)==pat.charAt(j)){
                    temp--;
                }
            }
            if(temp==0) answer++;
        }
        return answer;
    }
}