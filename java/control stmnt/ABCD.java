import java.util.*;

class ABCD{
	public static void  main (String args[]){
		Scanner sc = new Scanner (System.in);
		char a = sc.next().charAt(0);

		switch(a){
			case 'A':
			System.out.println("apple");
			break;
			case 'B':
			System.out.println("ball");
			break;
			case 'C':
			System.out.println("cat");
			default:
			System.out.println("wrong selection");
		}
	}
}
