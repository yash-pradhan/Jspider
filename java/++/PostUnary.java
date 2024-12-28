class PostIncrement{
	public static void main(String args[]){
		int a = 5;
		System.out.print(a++);
		System.out.println(a);

		int b = 6;
		System.out.print(b--);
		System.out.println(b);


		System.out.println("----------------------");

		int p = 17;
		System.out.println(p++);
		System.out.println(p++);
		System.out.println(p);


		int q = 14;
		System.out.println(q--);
		System.out.println(q--);
		System.out.println(q);

		System.out.println("----------------------");

		int x = 10;
		System.out.println(x++ + x++);

		int y = 14;
		System.out.println(y-- + y--);
	}
}
