class Solution {
    public String solution(String myString, String pat) {
        String answer = "";
        String temp = "";
        for(int i=0; i<=myString.length()-pat.length(); i++){
            int n = pat.length();
            for(int j=0; j<pat.length(); j++){
                if(myString.charAt(i+j)==pat.charAt(j)){
                    n--;
                }
            }
            if(n==0){
                answer = temp+pat;
                temp += pat.charAt(0);
            }else{
                temp += myString.charAt(i);
            }
        }
        return answer;
    }
}