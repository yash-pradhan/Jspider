class Circle{
	public static void main(String args[]){
	int r=30;
		for(int x=-r;x<=r;x++){
			for(int y=-r;y<=r;y++){
				if(r*r>=x*x+y*y){ 
					System.out.print("* ");
				}else
				System.out.print("  ");
			}
			System.out.println();
		}
	}
}
