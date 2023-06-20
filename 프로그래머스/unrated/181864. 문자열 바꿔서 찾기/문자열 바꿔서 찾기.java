class Solution {
    public int solution(String myString, String pat) {
        int answer = 0;
        String temp = myString.replace("A","1").replace("B","A").replace("1","B");
        for(int i=0; i<=myString.length()-pat.length(); i++){
            int n = pat.length();
            for(int j=0; j<pat.length(); j++){
                if(temp.charAt(i+j)==pat.charAt(j)){
                    n--;
                }else{
                    break;
                }
            }
            if(n==0){
                answer=1;
                break;
            }
        }
        return answer;
    }
}