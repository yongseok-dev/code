class Solution {
    public int[] solution(int[] arr, int n) {
        int count = arr.length;
        int[] answer = new int[count];
        for(int i=0; i<arr.length; i++){
            answer[i] = arr[i]+((count+i)%2==1?n:0);
        }
        return answer;
    }
}