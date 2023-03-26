import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        long answer = 0;
        Scanner sc = new Scanner(System.in);
        int n = sc.nextInt();
        int m = sc.nextInt();

        long[] sum = new long[n + 1];
        long[] mod = new long[m];
        for (int i = 1; i <= n; i++) {
            sum[i] = (sum[i - 1] + sc.nextInt()) % m;
            mod[(int) sum[i]]++;
        }
        answer += mod[0];
        for (int i = 0; i < mod.length; i++) {
            answer += (mod[i] * (mod[i] - 1) / 2);
        }
        System.out.println(answer);
    }
}
