class Example1{
	static int test(){
		return 10;
	}
	public static void main(String args[]){
		int  val = test();
		System.out.println("Return value : " + val);//display

		System.out.println("Return value : " + test());
	}
}
