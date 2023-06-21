import java.util.*;

class Solution {
    public String[] solution(String myStr) {
        List<String> list = new ArrayList<>();
        String temp ="";
        for(int i=0; i<myStr.length(); i++){
            if(myStr.charAt(i)=='a'||myStr.charAt(i)=='b'||myStr.charAt(i)=='c'){
                if(temp.length()>0){
                    list.add(temp);
                    temp="";
                }
            }else{
                temp+=myStr.charAt(i);
            }
        }
        if(temp.length()>0){
            list.add(temp);
        }
        String[] answer = new String[list.size()>0?list.size():1];
        if(list.size()>0){
            for(int i=0; i<answer.length; i++){
                answer[i] = list.get(i);
            }
        }else{
            answer[0] = "EMPTY";
        }
                
        return answer;
    }
}