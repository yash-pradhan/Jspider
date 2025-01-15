class Prime{
	public static void main(String args[]){
		int num = (int)Math.round(Math.random()*100);
		int a =1;
		int count = 0;
		while(a<num/2){
			if(num%a==0){
				count++;
			}
			a++;
		}
			if(count==1){
				System.out.println(num+" is prime");
			}else
			System.out.println(num+" is not prime");
	}
}
