// Product constructor function
function Product(id, name, price, quantity, category, isAvailable) {
  this.id = id;
  this.name = name;
  this.price = price; // in smallest currency unit (number)
  this.quantity = quantity;
  this.category = category;
  this.isAvailable = isAvailable; // true / false
}

const products = [
  new Product(1, "Smartphone X", 15000000, 10, "Electronics", true),
  new Product(2, "Laptop Pro", 35000000, 5, "Electronics", true),
  new Product(3, "Wireless Earbuds", 2500000, 0, "Accessories", false),
  new Product(4, "Charging Cable", 150000, 25, "Accessories", true),
  new Product(5, "4K Monitor", 12000000, 2, "Electronics", true),
  new Product(6, "Leather Case", 800000, 3, "Accessories", true),
  new Product(7, "Desk Lamp", 700000, 0, "Home", false)
];

function getNamePriceArray(items) {
  return items.map(p => ({ name: p.name, price: p.price }));
}

function filterInStock(items) {
  return items.filter(p => p.quantity > 0);
}

function hasPriceOver30M(items) {
  return items.some(p => p.price > 30000000);
}

function accessoriesAllAvailable(items) {
  const accessories = items.filter(p => p.category === "Accessories");
  if (accessories.length === 0) return false;
  return accessories.every(p => p.isAvailable === true);
}

function totalInventoryValue(items) {
  return items.reduce((sum, p) => sum + p.price * p.quantity, 0);
}

function printForOf(items) {
  for (const p of items) {
    const status = p.isAvailable ? "Đang bán" : "Không bán";
    console.log(`${p.name} - ${p.category} - ${status}`);
  }
}

function printForIn(items) {
  for (const p of items) {
    console.log("---");
    for (const key in p) {
      if (Object.prototype.hasOwnProperty.call(p, key)) {
        console.log(`${key}: ${p[key]}`);
      }
    }
  }
}

function listSellingInStock(items) {
  return items.filter(p => p.isAvailable && p.quantity > 0).map(p => p.name);
}

module.exports = {
  Product,
  products,
  getNamePriceArray,
  filterInStock,
  hasPriceOver30M,
  accessoriesAllAvailable,
  totalInventoryValue,
  printForOf,
  printForIn,
  listSellingInStock
};
