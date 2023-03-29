import java.util.Scanner;

public class Main {
    public static void main(String[] args) throws Exception {
        Scanner sc = new Scanner(System.in);
        String str = sc.nextLine();
        String[] arrSt = str.split("");
        int[] arr = new int[str.length()];
        for (int i = 0; i < arrSt.length; i++) {
            arr[i] = Integer.parseInt(arrSt[i]);
        }

        for (int i = 0; i < arr.length - 1; i++) {
            int max = i;
            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] > arr[max]) {
                    max = j;
                }
            }
            int temp = arr[i];
            arr[i] = arr[max];
            arr[max] = temp;
        }

        for (int i : arr) {
            System.out.print(i);
        }
    }
}