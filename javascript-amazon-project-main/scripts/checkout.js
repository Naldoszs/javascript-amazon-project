import { renderCartItems } from "./checkout/orderSummary.js";

import { renderPaymentSummary } from "./checkout/paymentSummary.js";

import { loadProducts, loadProductsFetch } from "../data/products.js";

// import "../data/cart-oop.js";

// import "../data/cart-oop-function.js";

// import "../data/cart-oop-class.js";

// import "../data/backend-practice.js";

// import { loadCarts } from "../data/cart.js";

// my main code
/* new Promise((resolve, reject) => {
  loadProducts(() => {
    resolve(); // means once resolved or done move to then.
  });
}).then(() => {
  renderCartItems();
  renderPaymentSummary();
}); */
//main code 2
loadProductsFetch()
  .then((data) => {
    return data;
  })
  .then(() => {
    renderCartItems();
    renderPaymentSummary();
  });

/* new Promise((resolve, reject) => {
  loadProductsFetch()
    .then((products) => {
      resolve(products); // Resolve with the loaded products
    })
    .catch((error) => {
      reject(error); // Reject in case of an error
    });
})
  .then((products) => {
    // Use the products if needed
    console.log("Loaded products:", products);

    // Render cart items and payment summary
    renderCartItems(products);
    renderPaymentSummary(products);
  })
  .catch((error) => {
    console.error("Error loading products or rendering:", error);
  }); */

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
