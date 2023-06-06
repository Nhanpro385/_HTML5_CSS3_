// Định nghĩa đối tượng
function Product() {
    // Các thuộc tính của đối tượng
    this.name = "";
    this.price = 0;
    this.quantity = 0;
    this.description = "";
  
    // Getter và setter cho thuộc tính "name"
    this.getName = function() {
      return this.name;
    };
    this.setName = function(value) {
      this.name = value;
    };
  
    // Getter và setter cho thuộc tính "price"
    this.getPrice = function() {
      return this.price;
    };
    this.setPrice = function(value) {
      this.price = value;
    };
  
    // Getter và setter cho thuộc tính "quantity"
    this.getQuantity = function() {
      return this.quantity;
    };
    this.setQuantity = function(value) {
      this.quantity = value;
    };
  
    // Getter và setter cho thuộc tính "description"
    this.getDescription = function() {
      return this.description;
    };
    this.setDescription = function(value) {
      this.description = value;
    };
  }
  
  // Sử dụng đối tượng
  var product = new Product();
  product.setName("Sản phẩm A");
  product.setPrice(99.99);
  product.setQuantity(10);
  product.setDescription("Mô tả sản phẩm");
  
  console.log(product.getName()); // Output: Sản phẩm A
  console.log(product.getPrice()); // Output: 99.99
  console.log(product.getQuantity()); // Output: 10
  console.log(product.getDescription()); // Output: Mô tả sản phẩm
  