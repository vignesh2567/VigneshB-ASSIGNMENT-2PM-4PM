class Shape {
  constructor(name) {
    this.name = name;
  }
}
class Circle extends Shape {
  constructor(radius) {
    super("Circle"); 
    this.radius = radius;
  }

  calculateArea() {
    return Math.PI * this.radius * this.radius;
  }
}
let circle1 = new Circle(5);
console.log("Shape:", circle1.name);
console.log("Area:", circle1.calculateArea().toFixed(2));
