class Solution {
    public int[] solution(int[] arr, int k) {
        int[] answer = new int[k];
        for(int i=0; i<answer.length; i++){
            answer[i] = -1;
        }
        int index = 0;
        for(int i=0; i<arr.length; i++){
            if(index>=k) break;
            boolean check = true;
            for(int j=0; j<index; j++){
                if(answer[j]==arr[i]){
                    check = false;
                    break;
                } 
            }
            if(check) answer[index++] = arr[i];
        }
        return answer;
    }
}