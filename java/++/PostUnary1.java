class PostUnary1{
	public static void main (String args[]){
		int p=12;
		int q = p++ + p++ + p++;
		System.out.println(q);

		int r = 16;
		int s = r-- + r-- + r--;
		System.out.println(s);

		int a = 13;
		int b = 15;
		int c ;
		System.out.println(c =  a++ + b-- + a++ + b --);
		
	}
}
