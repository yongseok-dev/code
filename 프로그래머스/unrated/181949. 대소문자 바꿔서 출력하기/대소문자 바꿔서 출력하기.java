import java.util.Scanner;

public class Solution {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        String a = sc.next();
        for(String s:a.split("")){
            String o = "";
            if(s.charAt(0)>'Z'){
                o = s.toUpperCase();
            }else{
                o = s.toLowerCase();
            }
            System.out.print(o);
        }
    }
}