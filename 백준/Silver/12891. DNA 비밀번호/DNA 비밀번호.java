import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.util.StringTokenizer;

public class Main {
	public static void main(String[] args) throws Exception {
		BufferedReader bf = new BufferedReader(new InputStreamReader(System.in));
		StringTokenizer st = new StringTokenizer(bf.readLine());
		int sn = Integer.parseInt(st.nextToken());
		int pn = Integer.parseInt(st.nextToken());
		String[] s = bf.readLine().split("");
		int[] arr = new int[sn];
		for (int i = 0; i < arr.length; i++) {
			arr[i] = s[i].equals("A") ? 0 : s[i].equals("C") ? 1 : s[i].equals("G") ? 2 : 3;
		}
		st = new StringTokenizer(bf.readLine());
		int[] check = new int[4];
		for (int i = 0; i < check.length; i++) {
			check[i] = Integer.parseInt(st.nextToken());
		}

		int answer = 0;
		for (int i = 0; i < pn; i++) {
			check[arr[i]]--;
		}
		if (check[0] < 1 && check[1] < 1 && check[2] < 1 && check[3] < 1) {
			answer++;
		}

		for (int i = pn; i < sn; i++) {
			check[arr[i-pn]]++;
			check[arr[i]]--;
			if (check[0] < 1 && check[1] < 1 && check[2] < 1 && check[3] < 1) {
				answer++;
			}
		}
		
		System.out.println(answer);
		bf.close();
	}
}
