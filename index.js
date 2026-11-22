
const products = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Headphones", price: 2000 },
  { id: 3, name: "Mouse", price: 500 }
];

function getProducts() {
  return products;
}

function calculateTotal(items) {
  return items.reduce((total, item) => total + item.price, 0);
}

if (require.main === module) {
  console.log("Welcome to ShopEasy Lite!");
  console.log("Available Products:", getProducts());
  console.log("Total Price:", calculateTotal(products));
}

module.exports = { getProducts, calculateTotal };
