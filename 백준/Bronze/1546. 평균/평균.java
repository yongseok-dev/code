import java.util.*;
import java.io.*;

public class Main {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int n= Integer.parseInt(sc.nextLine());
        int[] arr = new int[n];
        int max = 0;
        int sum = 0;
        String str = sc.nextLine();
        for(String s : str.split(" ")){
            int num = Integer.parseInt(s);
            sum+= num;
            if(max<num){
                max=num;
            }
        }
        double avg = (double) sum/max/n*100;
        System.out.print(avg);
    }
}