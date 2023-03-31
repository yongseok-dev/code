import java.util.*;
import java.io.*;

public class Main {
	public static void main(String[] arge) throws Exception {
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();

		int[] arr = new int[n];
		int sum = 0;

		for (int i = 0; i < n; i++) {
			arr[i] = sc.nextInt();
		}

		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n - 1 - i; j++) {
				if (arr[j] > arr[j + 1]) {
					int temp = arr[j];
					arr[j] = arr[j + 1];
					arr[j + 1] = temp;
				}
			}
			sum += arr[n - 1 - i] * (i + 1);
		}
		System.out.println(sum);
	}
}