class PreUnary{
	public static void main(String args[]){
		int a = 7;
		System.out.println(++a);
		System.out.println(a);

		int b = 5;
		System.out.println(--b);
		System.out.println(b);

		System.out.println("-------------");
		
		int x = 15;
		System.out.println(++x);
		System.out.println(++x);
		System.out.println(x);

		int y = 12;
		System.out.println(--y);
		System.out.println(--y);
		System.out.println(y);

		System.out.println("-------------");
		 a = 11;
		 b = ++a + ++a;
		System.out.println(b);

		int c = 17;
		int d = --c + --c;
		System.out.println(d);

		
		System.out.println("-------------");
		int  p = 14;
		int q= ++p + ++p +  ++p;
		System.out.println(q);

		int r = 18;
		int s = --r+ --r + --r;
		System.out.println(s);




		
		
	}
}
