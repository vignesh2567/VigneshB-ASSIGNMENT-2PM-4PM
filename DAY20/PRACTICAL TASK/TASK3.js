class Student {
  constructor(name, rollNo) {
    this.name = name;
    this.rollNo = rollNo;
  }
  display() {
    console.log("Name:", this.name, "| Roll No:", this.rollNo);
  }
}
let student1 = new Student("Vicky", 101);
let student2 = new Student("Arun", 102);
let student3 = new Student("Kumar", 103);
student1.display();
student2.display();
student3.display();
