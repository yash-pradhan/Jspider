class Example6{
	static char display(){
		return 'c';
	}
	static boolean send(){
		return true;
	}
	public static void main (String args[]){
		char ch = display();
		System.out.println("Returned value : " + ch);
		System.out.println("Returned value : " + send());
	}
}
