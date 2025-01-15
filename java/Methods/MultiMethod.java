class MultiMethod{
	static void display(){
		System.out.println("executing display() method....");
	}
	static void get(){
		System.out.println("executing get() method....");
	}
	static void push(){
		System.out.println("executing push() method....");
	}
	public static void main (String args[]){
		System.out.println("Program started");
		push();
		get();
		display();
		System.out.println("Program ended");
	}	
}
