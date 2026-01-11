class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  discountedPrice(discountPercent) {
    return this.price - (this.price * discountPercent / 100);
  }
}
let product1 = new Product("Laptop", 50000);
let finalPrice = product1.discountedPrice(10);
console.log(finalPrice); 
