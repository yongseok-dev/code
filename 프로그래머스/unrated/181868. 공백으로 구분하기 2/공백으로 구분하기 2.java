import java.util.*;

class Solution {
    public String[] solution(String my_string) {
        List<String> list = new ArrayList<>();
        String temp = "";
        for(int i=0; i<my_string.length(); i++){
            if(temp.length()!=0 && my_string.charAt(i)==' '){
                list.add(temp);
                temp="";
            }else if(my_string.charAt(i)!=' '){
                temp+=my_string.charAt(i);
            }
        }
        if(temp.length()!=0){
            list.add(temp);
        }
        String[] answer = new String[list.size()];
        for(int i=0; i<answer.length; i++){
            answer[i] = list.get(i);
        }
        return answer;
    }
}