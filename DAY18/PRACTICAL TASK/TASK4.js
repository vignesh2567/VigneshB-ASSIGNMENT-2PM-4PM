let marks = 66;   
let grade, remark;

if (marks >= 90 && marks <= 100) {
  grade = "A+";
  remark = "Excellent";
}
else if (marks >= 80) {
  grade = "A";
  remark = "Very Good";
}
else if (marks >= 70) {
  grade = "B";
  remark = "Good";
}
else if (marks >= 60) {
  grade = "C";
  remark = "Average";
}
else if (marks >= 50) {
  grade = "D";
  remark = "Pass";
}
else if (marks >= 0) {
  grade = "F";
  remark = "Fail";
}
else {
  grade = "Invalid";
  remark = "Invalid marks";
}

console.log("Marks:", marks);
console.log("Grade:", grade);
console.log("Remark:", remark);
