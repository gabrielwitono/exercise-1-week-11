const test = require("node:test");
const assert = require("node:assert");
const logic = require("./counter.js");

test("increments the value", () => {
  assert.strictEqual(logic.nextValue(0, 1), 1);
  assert.strictEqual(logic.nextValue(41, 1), 42);
});

test("decrements the value", () => {
  assert.strictEqual(logic.nextValue(5, -1), 4);
  assert.strictEqual(logic.nextValue(0, -1), -1);
});

test("clamps at the maximum", () => {
  assert.strictEqual(logic.nextValue(logic.MAX, 1), logic.MAX);
  assert.strictEqual(logic.nextValue(1000, 1), 99);
});

test("clamps at the minimum", () => {
  assert.strictEqual(logic.nextValue(logic.MIN, -1), logic.MIN);
  assert.strictEqual(logic.nextValue(-1000, -1), -99);
});

test("reset returns zero", () => {
  assert.strictEqual(logic.reset(), 0);
});
