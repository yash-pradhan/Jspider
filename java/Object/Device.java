class Mobile{
  String MobileName;
  double Price;

  void call(){
    System.out.println(MobileName+" Calling");
  }
  void  message(){
    System.out.println("you have purchesed "+ MobileName + "with " + price);
  } 
}

public class Device {
  public static void main(String[] args) {
    Mobile samsung = new Mobile();
    samsung.MobileName = "samsung s24 ultra";
    samsung.Price = 150000;
    samsung.call();
    samsung.message();

    
    Mobile samsung = new Mobile();
    samsung.MobileName = "samsung s24 ultra";
    samsung.Price = 150000;
    samsung.call();
    samsung.message();

  }
}
