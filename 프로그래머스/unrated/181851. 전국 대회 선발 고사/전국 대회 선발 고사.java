class Solution {
    public int solution(int[] rank, boolean[] attendance) {
        int answer = 0;
        
        int n = rank.length;
        int point = 0;
        int[] value = {10000, 100, 1};
        
        int[] rankCopy = new int[n];
        for(int i=0; i<n; i++){
            rankCopy[i] = rank[i];
        }
        for(int i=0; i<n; i++){
            for(int j=i+1; j<n; j++){
                int temp = rankCopy[i];
                boolean temp_ = attendance[i];
                if(rankCopy[i]>rankCopy[j]){
                    rankCopy[i]=rankCopy[j];
                    rankCopy[j]=temp;
                    attendance[i]=attendance[j];
                    attendance[j]=temp_;
                }
            }
        }
        for(int i=0; i<n; i++){
            if(point<3 && attendance[i]){
                int index = -1;
                for(int j=0; j<n; j++){
                    index=j;
                    if(rank[j]==rankCopy[i]) break;
                }
                answer += value[point++]*index;
            }
        }
        return answer;
    }
}