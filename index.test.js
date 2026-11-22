const test = require("node:test");
const assert = require("node:assert/strict");

const { getProducts, calculateTotal } = require("./index");

test("should return 3 products", () => {
  const products = getProducts();
  assert.equal(products.length, 3);
});

test("should calculate total price correctly", () => {
  const products = getProducts();
  assert.equal(calculateTotal(products), 52500);
});

test("should return zero for empty cart", () => {
  assert.equal(calculateTotal([]), 0);
});
