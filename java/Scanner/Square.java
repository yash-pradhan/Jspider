import java.util.Scanner;

class Square{
    public static void main(String args[]){
        System.out.print("take input number: ");
        Scanner sc= new Scanner(System.in);
        int num = sc.nextInt();
        System.out.println("squre of the number is : "+ (num*num));
    }
}
