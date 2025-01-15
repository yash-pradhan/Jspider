class SumDivisor{
    public static void main(String args[]){
    int num = 100;
    do{
    	int a = 1;
    	int sum = 0;
    	while(a<=num/2){
    		if(num%a==0){
    			sum+=a;
    		}
    		a++;
    	}
    	if(sum==num){
    		System.out.println(num+ " number is perfect "+ sum );
    	}
    	else
    	System.out.println(num+" number is not perfect "+ sum);
    	num--;
    }   while(num>0);
       
    }
    }
