class Student{
  String name;
  long mobile; 
  void write(){
    System.out.println(name+" is writing");
  }
  void listen(){
    System.out.println(mobile+" is listening");
  }
}

public class MainClass{
  public static void main(String[] args) {
    Student s1 = new Student();
    s1.name = "yash";
    s1.mobile = 9861353117L;
    s1.write();
    s1.listen();
  }
}
