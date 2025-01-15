class Demo{
	public void show(int a, char d){
		System.out.println(a+""+d);
	}
	public void show(char a, int d ){
		System.out.println(a+""+d);
	}
	public static void main(String args[]){
		Demo d = new Demo();
		d.show(4, 'r');
		d.show('r', 4);
	}
}
