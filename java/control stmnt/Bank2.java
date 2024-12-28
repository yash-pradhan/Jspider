class Bank2{

public static void Saadhi(char gender, int age){
	if(gender == 'm'){
		if(age>= 21){
			System.out.println("eligible bachelor");
		}else{
			System.out.println("Under age Boy");
		}
	}else if(gender == 'f'){
		if(age>=18)
		System.out.println("Eligible Spinster");
		else
		System.out.println("Under age Girl");
	}
}

	public static void main(String args[]){
// 		double accBal = 10000;
// 		int amt = 12000;
// 
// 		if(amt <= accBal){
// 			if(amt%100==0){
// 				System.out.println("withdrawal success");
// 			}else{
// 				System.out.println("invalid denomination");
// 				
// 			}
// 			
// 		}else{
// 			System.out.println("insuffecient balance");
// 		}

	Saadhi('f',23 );
	}
}
