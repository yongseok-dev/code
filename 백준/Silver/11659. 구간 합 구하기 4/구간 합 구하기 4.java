import java.util.*;
import java.io.*;

public class Main {

    public static void main(String[] args) throws IOException {
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();
        int[] arr = new int[n + 1];
        int[] sum = new int[n + 1];
        for (int i = 1; i < arr.length; i++) {
            arr[i] = sc.nextInt();
            sum[i] = sum[i - 1] + arr[i];
        }
        for (int i = 0; i < m; i++) {
            int startIndex = sc.nextInt();
            int endIndex = sc.nextInt();
            System.out.println(sum[endIndex] - sum[startIndex - 1]);
        }
    }
}
