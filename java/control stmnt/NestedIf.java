class NestedJava{
	public static void main(String args[]){
		double n = Math.round(Math.random()*100);

		if(n%2==0){
			if(n<10)
			System.out.println("biriyani");
			else
			System.out.println("chicken fried rice");
		
		}else{
			if(n<10)
				System.out.println("momos");
			else
			System.out.println("showarma");
		}
	}
}
