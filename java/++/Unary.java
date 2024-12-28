class Unary{
	public static void main(String args[]){
// 		int a = 13;
// 		int b = 16;
// 		int c = ++a + --b + ++a + --b;
// 		System.out.println(c);
// 
// 		a = 17;
// 		b = 15;
// 		System.out.println(c= ++a + --b + ++a + --b);

		int  a = 10;
		int b = a++ + ++a;
		System.out.println(b);

		a = 15;
		b = --a + a--;
		System.out.println(b);
	}
}
