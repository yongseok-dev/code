class Solution {
    public int solution(int[][] triangle) {
        int answer = 0;
        for(int i=0; i<triangle.length-1; i++){
            int n = triangle[i].length;
            int[] temp = new int[n+1];
            for(int j=0; j<n; j++){
                int a = triangle[i][j]+triangle[i+1][j];
                int b = triangle[i][j]+triangle[i+1][j+1];
                if(a>temp[j]){
                    temp[j] = a;
                }
                if(b>temp[j+1]){
                    temp[j+1] = b;
                }
            }
            for(int j=0; j<temp.length; j++){
                triangle[i+1][j] = temp[j];
            }
        }
        for(int i=0; i<triangle[triangle.length-1].length; i++){
            if(answer<triangle[triangle.length-1][i]){
                answer=triangle[triangle.length-1][i];
            }
        }
        return answer;
    }
}