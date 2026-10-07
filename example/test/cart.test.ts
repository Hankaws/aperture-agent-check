import assert from "node:assert/strict";
import { test } from "node:test";
import { cartLabel, cartTotal } from "../src/cart.ts";

const items = [
  { name: "Tee", cents: 1500, quantity: 2 },
  { name: "Mug", cents: 900, quantity: 1 },
];

test("the total counts every item's quantity", () => {
  assert.equal(cartTotal(items), 3900);
});

test("the label says how many items and what they cost", () => {
  assert.equal(cartLabel(items), "3 items · $39.00");
});
