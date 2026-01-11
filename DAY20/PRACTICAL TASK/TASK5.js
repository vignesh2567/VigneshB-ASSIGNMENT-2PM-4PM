function Student(name, rollNo) {
  this.name = name;
  this.rollNo = rollNo;
}
Student.prototype.greet = function () {
  console.log("Hello, my name is " + this.name);
};
let s1 = new Student("Vicky", 101);
let s2 = new Student("Arun", 102);
s1.greet();
s2.greet();
