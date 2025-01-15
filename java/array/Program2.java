	class Program2{
		public static void main(String args[]){
			int x[][]= new int[10][10];
			int r=0;
		for(int i=0;i<x.length;i++){
			for(int j=0;j<x[0].length;j++){
				r++;
				x[i][j]=r;
			}
		}

		for(int i=0;i<x.length;i++){
			for(int j=0;j<x[0].length;j++){
				System.out.print(x[i][j]+" ");
			}
			System.out.println();
		}
	}
}
