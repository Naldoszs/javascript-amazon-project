import { renderCartItems } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import { loadProducts } from "../data/products.js";

// import "../data/cart-oop.js";

// import "../data/cart-oop-function.js";

// import "../data/cart-oop-class.js";

// import "../data/backend-practice.js";

// import { loadCarts } from "../data/cart.js";

// my main code
new Promise((resolve, reject) => {
  loadProducts(() => {
    resolve(); // means once resolved or done move to then.
  });
}).then(() => {
  renderCartItems();
  renderPaymentSummary();
});

//example code
/* new Promise((resolve, reject) => {
  loadProducts(() => {
    resolve(); // means once resolved or done move to then.
  });
})
  .then((val) => {
    console.log(val);
    return new Promise((resolve) => {
      loadCarts(() => {
        resolve();
      });
    });
  })
  .then(() => {
    renderCartItems();
    renderPaymentSummary();
  });
 */
//example code
// INVOKE THE FUNCTION TO RENDER THE CART ON PAGE LOAD
/* loadProducts(() => {
  renderCartItems();
  renderPaymentSummary();
});
 */
