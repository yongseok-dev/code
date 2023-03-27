import java.util.Scanner;

public class Main {
	public static void main(String[] args) throws Exception {
		int answer = 1;
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		// for 중첩
//		for (int i = 1; i < n; i++) {
//			int sum = 0;
//			for (int j = i; j < n; j++) {
//				sum+=j;
//				if(sum==n) {
//					answer++;
//					break;
//				}else if(sum>n) {
//					break;
//				}
//			}
//		}
		// 2pointer
		int i = 1;
		int j = 1;
		int sum = 1;
		while (j != n) {
			if (sum > n) {
				sum -= i++;
			} else if (sum == n) {
				answer++;
				sum += ++j;
			} else {
				sum += ++j;
			}
		}
		System.out.println(answer);
	}
}
