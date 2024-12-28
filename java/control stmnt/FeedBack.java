import java.util.*;

class FeedBack{
	public static void main(String args[]){
		Scanner sc = new Scanner(System.in);
		int select = sc.nextInt();

		switch(select){
			case 1: 
			System.out.println("Excellent");
			break;
			case 2: 
			System.out.println("Good");
			break;
			case 3: 
			System.out.println("Average");
			break;
			case 4: 
			System.out.println("bad");
			break;
			default:
			System.out.println("invalid");
			
												
		}
	}
}
