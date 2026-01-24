const {
  products,
  getNamePriceArray,
  filterInStock,
  hasPriceOver30M,
  accessoriesAllAvailable,
  totalInventoryValue,
  printForOf,
  printForIn,
  listSellingInStock
} = require("./products");

console.log("--- Câu 2: Danh sách products (tối thiểu 6 sản phẩm) ---");
console.log(products);

console.log("\n--- Câu 3: Mảng chỉ chứa name và price ---");
console.log(getNamePriceArray(products));

console.log("\n--- Câu 4: Sản phẩm còn hàng (quantity > 0) ---");
console.log(filterInStock(products));

console.log("\n--- Câu 5: Có ít nhất một sản phẩm > 30.000.000? ---");
console.log(hasPriceOver30M(products));

console.log("\n--- Câu 6: Tất cả Accessories đang được bán? ---");
console.log(accessoriesAllAvailable(products));

console.log("\n--- Câu 7: Tổng giá trị kho ---");
console.log(totalInventoryValue(products));

console.log("\n--- Câu 8: for...of in: Tên - Danh mục - Trạng thái ---");
printForOf(products);

console.log("\n--- Câu 9: for...in in thuộc tính và giá trị ---");
printForIn(products);

console.log("\n--- Câu 10: Tên các sản phẩm đang bán và còn hàng ---");
console.log(listSellingInStock(products));
