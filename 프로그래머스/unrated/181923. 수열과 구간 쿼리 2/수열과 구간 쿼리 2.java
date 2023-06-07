class Solution {
    public int[] solution(int[] arr, int[][] queries) {
        int[] answer = new int[queries.length];
        for(int j=0; j<queries.length; j++){
            int[] query = queries[j];
            answer[j] = -1;
            for(int i=query[0]; i<=query[1]; i++){
                if(arr[i] > query[2]){
                    if(answer[j] == -1){
                        answer[j] = arr[i];
                    }else{
                        answer[j] = answer[j]>arr[i]?arr[i]:answer[j];   
                    }
                }
            }
        }
        return answer;
    }
}