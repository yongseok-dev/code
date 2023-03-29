import java.util.*;
import java.io.*;

public class Main {
	public static void main(String[] arge) throws Exception {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		int n = Integer.parseInt(bf.readLine());
		int[] a = new int[n];
		String[] st = bf.readLine().split(" ");
		for (int i = 0; i < n; i++) {
			a[i] = Integer.parseInt(st[i]);
		}
		Stack<Integer> stack = new Stack<>();
		for (int i = 0; i < n; i++) {
			while (!stack.empty() && a[stack.peek()] < a[i]) {
				a[stack.pop()] = a[i];
			}
			stack.push(i);
		}
		while (!stack.empty()) {
			a[stack.pop()] = -1;
		}
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		for (int i : a) {
			bw.write(i + " ");
		}
		bw.write("\n");
		bw.flush();
	}
}