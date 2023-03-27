import java.util.Arrays;
import java.util.Scanner;

public class Main {
	public static void main(String[] args) throws Exception {
		int answer = 0;
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();
		int m = sc.nextInt();

		int[] arr = new int[n];
		for (int i = 0; i < arr.length; i++) {
			arr[i] = sc.nextInt();
		}
		
		Arrays.sort(arr);
		
		int i = 0;
		int j = n-1;
		
		while(i<j) {
			int sum = arr[i]+arr[j];
			if(sum==m) {
				answer++;
				i++;
				j--;
			}else if(sum>m) {
				j--;
			}else {
				i++;
			}
		}

		System.out.println(answer);
	}
}
