import java.util.*;
class Solution {
    public int solution(int a, int b, int c, int d) {
        int[] temp = {a,b,c,d};
        Arrays.sort(temp);
        int answer = 0;
        if(temp[0]==temp[3]){
            answer = 1111*temp[0];
        }else if(temp[0]==temp[1]&&temp[1]==temp[2]){
            answer = (int) Math.pow((10*temp[0]+temp[3]),2);
        }else if(temp[3]==temp[1]&&temp[1]==temp[2]){
            answer = (int) Math.pow((10*temp[3]+temp[0]),2);
        }else if(temp[0]==temp[1]&&temp[2]==temp[3]){
            answer = (temp[0]+temp[2])*(temp[2]-temp[0]);
        }else if(temp[0]==temp[1]){
            answer = temp[2]*temp[3];
        }else if(temp[1]==temp[2]){
            answer = temp[0]*temp[3];
        }else if(temp[2]==temp[3]){
            answer = temp[0]*temp[1];
        }else{
            answer = temp[0];
        }
        return answer;
    }
}