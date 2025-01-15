class Factors{
	public static void main(String args[]){
		double num = Math.round(Math.random()*100);

		System.out.println("number is "+ num);

		int a=1;
		while(a<=num/2){
			if(num%a==0)
				System.out.println(a);

			a++;
		}
	}}
