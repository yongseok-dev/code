import java.util.*;
import java.io.*;

public class Main {

    public static void main(String[] args) throws Exception {
        BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
        StringTokenizer st = new StringTokenizer(br.readLine());
        int n = Integer.parseInt(st.nextToken());
        int m = Integer.parseInt(st.nextToken());

        int[][] sum = new int[n + 1][n + 1];
        for (int i = 1; i <= n; i++) {
            st = new StringTokenizer(br.readLine());
            for (int j = 1; j <= n; j++) {
                sum[i][j] = Integer.parseInt(st.nextToken()) - sum[i - 1][j - 1] + sum[i - 1][j] + sum[i][j - 1];
            }
        }
        for (int i = 0; i < m; i++) {
            st = new StringTokenizer(br.readLine());
            int startIndexX = Integer.parseInt(st.nextToken());
            int startIndexY = Integer.parseInt(st.nextToken());
            int endIndexX = Integer.parseInt(st.nextToken());
            int endIndexY = Integer.parseInt(st.nextToken());
            int answer = 0;
            answer += sum[endIndexX][endIndexY] - sum[startIndexX - 1][endIndexY] - sum[endIndexX][startIndexY - 1] + sum[startIndexX - 1][startIndexY - 1];
            System.out.println(answer);
        }
    }
}

