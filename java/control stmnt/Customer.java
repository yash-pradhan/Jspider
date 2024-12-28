import java.util.*;

class Customer{
	public static void main(String args[]){
		Scanner sc = new Scanner(System.in);
			   	
		int choice = sc.nextInt();
		switch(choice){
			case 1: 
			System.out.println("english");
			break;
			case 2:
			System.out.println("hindi");
			break;
			case 3:
			System.out.println("kannada");
			break;
			default:
			System.out.println("invalid");
			
		}
	}
}
