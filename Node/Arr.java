import java.util.*;

class Arr{
	public static void main(String arg[]){
		int arr[] = new int[5];
		Scanner sc = new Scanner(System.in);
		for(int i=0;i<arr.length;i++){
			System.out.println("enter the int data");
			arr[i]= sc.nextInt();
		}

		for(int i=0;i<arr.length;i++){
			System.out.println(arr[i]);
		}
		
	}
}
