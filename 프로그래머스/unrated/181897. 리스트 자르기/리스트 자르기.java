import java.util.*;

class Solution {
    public int[] solution(int n, int[] slicer, int[] num_list) {
        List<Integer> list = new ArrayList<>();
        int a = slicer[0];
        int b = slicer[1];
        int c = slicer[2];

        if(n==1){
        //n = 1 : num_list의 0번 인덱스부터 b번 인덱스까지
            for(int i=0; i<=b; i++){
                list.add(num_list[i]);
            }
        }else if(n==2){
        //n = 2 : num_list의 a번 인덱스부터 마지막 인덱스까지
            for(int i=a; i<num_list.length; i++){
                list.add(num_list[i]);
            }
        }else if(n==3){
        //n = 3 : num_list의 a번 인덱스부터 b번 인덱스까지
            for(int i=a; i<=b; i++){
                list.add(num_list[i]);
            }
        }else if(n==4){
        //n = 4 : num_list의 a번 인덱스부터 b번 인덱스까지 c 간격으로            
            for(int i=a; i<=b; i+=c){
                list.add(num_list[i]);
            }
        }

        int[] answer = new int[list.size()];
        for(int i=0; i<list.size(); i++){
            answer[i] = list.get(i);
        }

        return answer;
    }
}