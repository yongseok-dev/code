import java.io.*;
import java.util.*;

public class Main {

	public static void main(String[] args) throws Exception {
		StringBuilder answer = new StringBuilder("");
		Scanner sc = new Scanner(System.in);
		int n = sc.nextInt();

		int[] arr = new int[n];
		for (int i = 0; i < n; i++) {
			arr[i] = sc.nextInt();
		}
		ArrayList<Integer> stack = new ArrayList<>();
		int pointer = 0;
		for (int i = 1; i <= n; i++) {
			answer.append("+\n");
			stack.add(i);
			while (stack.size() > 0 && arr[pointer] == stack.get(stack.size() - 1)) {
				answer.append("-\n");
				stack.remove(stack.size() - 1);
				pointer++;
			}
		}
		if (pointer == n && stack.size() == 0) {
			System.out.println(answer);
		} else {
			System.out.println("NO");
		}
    }
}