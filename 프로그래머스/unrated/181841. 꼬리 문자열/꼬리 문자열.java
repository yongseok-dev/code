class Solution {
    public String solution(String[] str_list, String ex) {
        String answer = "";
        for(String str:str_list){
            String temp = str.replace(ex,"");
            if(str.length()==temp.length()){
                answer+=str;
            }
        }
        return answer;
    }
}