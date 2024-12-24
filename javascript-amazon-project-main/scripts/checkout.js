import { renderCartItems } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import { loadProducts } from "../data/products.js";

// import "../data/cart-oop.js";

// import "../data/cart-oop-function.js";

// import "../data/cart-oop-class.js";

// import "../data/backend-practice.js";

// INVOKE THE FUNCTION TO RENDER THE CART ON PAGE LOAD
loadProducts(() => {
  renderCartItems();
  renderPaymentSummary();
});
