import java.util.*;
import java.io.*;

public class Main {

    public static void main(String[] args) throws IOException {
        int sum = 0;
        Scanner sc = new Scanner(System.in);
        int n= Integer.parseInt(sc.nextLine());
        int[] arr = new int[n];
        String str = sc.nextLine();
        for(String s : str.split("")){
            sum+= Integer.parseInt(s);
        }
        System.out.print(sum);
    }
}