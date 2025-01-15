class Employee{
  int id;
  double ctc;

  void work(){
    System.out.println(id+" working");
  }
  void meeting(){
    System.out.println(id+" at meeting");
  }

}

public class Company {
  public static void main(String[] args) {
    Employee emp1  = new Employee();
    Employee emp2 = new Employee();

    emp1.id = 1234;
    emp2.id = 3214;

    emp1.work();
    emp2.meeting();
  }
}
