class Solution {
    public String solution(String code) {
        int mode = 0;
        String answer = "";
        for(int i=0; i<code.length(); i++){
            if(code.charAt(i)=='1'){
                mode = (mode==0)?1:0;
            }else if(mode==0 && i%2==0){
                answer += code.charAt(i);
            }else if(mode==1 && i%2==1){
                answer += code.charAt(i);
            }
        }
        return answer.length()==0?"EMPTY":answer;
    }
}