class Solution {
    public int[] solution(String myString) {
        int n = 1;
        for(int i=0; i<myString.length(); i++){
            if(myString.charAt(i)=='x') n++;
        }
        int[] answer = new int[n];
        int temp = 0;
        for(int i=0; i<myString.length(); i++){
            if(myString.charAt(i)=='x'){
                temp++;
            }else{
                answer[temp]++;
            } 
        }
        return answer;
    }
}