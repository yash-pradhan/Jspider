class Patter7{
	public static void main(String args[])
{
	int x=5;
	for(int i=0;i<x;i++){
		for(int j =0;j<x;j++){
			if(j==0||j==x-1||i==x/2||i==0){
				System.out.print("*"+" ");
			}
			else
			System.out.print(" "+" ");
		}
		System.out.println();
	}
		System.out.println();
		System.out.println();
	
	 x=5;
		for(int i=0;i<x;i++){
			for(int j =0;j<x;j++){
				if(j==0||j==x-1||i==x/2||i==0||i==x-1){
					System.out.print("*"+" ");
				}
				else
				System.out.print(" "+" ");
			}
			System.out.println();
		}

			System.out.println();
		System.out.println();
	
	 x=5;
		for(int i=0;i<x;i++){
			for(int j =0;j<x;j++){
				if(j==0||i==0||i==x-1){
					System.out.print("*"+" ");
				}
				else
				System.out.print(" "+" ");
			}
			System.out.println();
		}
			System.out.println();
		System.out.println();
	
	 x=5;
		for(int i=0;i<x;i++){
			for(int j =0;j<x;j++){
				if(j==0||i==0||i==x-1||j==x-1){
					System.out.print("*"+" ");
				}
				else
				System.out.print(" "+" ");
			}
			System.out.println();
		}
			System.out.println();
		System.out.println();
	
	 x=5;
		for(int i=0;i<x;i++){
			for(int j =0;j<x;j++){
				if(j==0||i==0||i==x-1||i==x/2){
					System.out.print("*"+" ");
				}
				else
				System.out.print(" "+" ");
			}
			System.out.println();
		}
			System.out.println();
		System.out.println();
	
	 x=5;
		for(int i=0;i<x;i++){
			for(int j =0;j<x;j++){
				if(j==0||i==0||i==x/2){
					System.out.print("*"+" ");
				}
				else
				System.out.print(" "+" ");
			}
			System.out.println();
		}
			System.out.println();
		System.out.println();
	
	 x=5;
		for(int i=0;i<x;i++){
			for(int j =0;j<x;j++){
				if(j==0||i==0){
					System.out.print("*"+" ");
				}else if(i>=x/2&&(j==x/2||j==x-1)){
					System.out.print("*"+" ");
					
				}else if(j>=x/2&&i==x/2){
					System.out.print("*"+" ");
					
				}else if(j<=x/2&&i==x-1){
					System.out.print("*"+" ");
					
				}
				else
				System.out.print(" "+" ");
			}
			System.out.println();
		}
	System.out.println();
		System.out.println();
			 x=5;
	for(int i=0;i<x;i++){
		for(int j =0;j<x;j++){
			if(j==0||j==x-1||i==x/2){
				System.out.print("*"+" ");
			}
			else
			System.out.print(" "+" ");
		}
		System.out.println();
	}
		System.out.println();
		System.out.println();
			 x=5;
	for(int i=0;i<x;i++){
		for(int j =0;j<x;j++){
			if(i==0||i==x-1||j==x/2){
				System.out.print("*"+" ");
			}
			else
			System.out.print(" "+" ");
		}
		System.out.println();
	}

		System.out.println();
		System.out.println();
			 x=5;
	for(int i=0;i<x;i++){
		for(int j =0;j<x;j++){
			if(i==0||j==x/2){
				System.out.print("*"+" ");
			}else if(i==x-1&&j<=x/2){
				System.out.print("*"+" ");
				
			}
			else if(j==0&&i>=x/2+1){
				System.out.print("*"+" ");
				
			}
			
			else
			System.out.print(" "+" ");
		}
		System.out.println();
	}
}
}
