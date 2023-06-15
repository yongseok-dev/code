class Solution {
    public int solution(int[] arr) {
        int[] tempArr = new int[arr.length];
        for(int i=0; i<arr.length; i++){
            tempArr[i] = arr[i];
        }
        
        int answer = -1;
        boolean isEqual = false;
        while(!isEqual){
            isEqual=true;
            answer++;
            for(int i=0; i<arr.length; i++){
                int n = tempArr[i];
                int temp = (n>=50&&n%2==0)?n/2:(50>n&&n%2==1)?n*2+1:n;
                if(isEqual&&n!=temp){
                    isEqual = false;
                }
                tempArr[i] = temp;
            }
        }
        return answer;
    }
}