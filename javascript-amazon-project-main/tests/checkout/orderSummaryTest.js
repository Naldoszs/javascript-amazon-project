import { renderCartItems } from "../../scripts/checkout/orderSummary.js";
import { loadFromStorage, cart } from "../../data/cart.js";

import { loadProducts } from "../../data/products.js";

// RUN AN INTEGRATED TEST
// checking for two things
/* 1. how the page looks &
2. how the page behaves */
//CREATE TEST SUITE
describe("TEST SUITE: renderSummary Function", () => {
  // Declare reusable variables
  let productId1, productId2, orderSummaryContainerEl;

  //load the products for all tests
  //done help waits bfr going for the next codes
  beforeAll((done) => {
    loadProducts(() => {
      done();
    });
  });

  //CREATE HOOK
  beforeEach(() => {
    // Initialize product IDs for reuse
    productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

    // Get the container to display the test (typical container used in our orderSummary.js file)
    orderSummaryContainerEl = document.querySelector(".jasmine-test-container");
    orderSummaryContainerEl.innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
    `;

    // MOCK - to fake the setItem method - not to dent our code base
    spyOn(localStorage, "setItem"); // to avoid the addToCartList(productId1) function saving to local storage

    // MOCK A PRODUCT IS ALREADY IN THE CART
    spyOn(localStorage, "getItem").and.callFake(function () {
      return JSON.stringify([
        // FIRST ITEM
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionsId: "1", // ASSUMING
        },
        // SECOND ITEM
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionsId: "2", // ASSUMING
        },
      ]);
    });

    // Re-load the cart from storage
    loadFromStorage();
  });

  //CREATE HOOK
  afterEach(() => {
    // Removing the HTML created in the test: no, it doesn't take space in Jasmine's HTML page
    orderSummaryContainerEl.innerHTML = "";
  });

  //FIRST TEST
  it("DISPLAYS THE CART", () => {
    // Render the cart items
    renderCartItems();

    // CHECKING IF THE GENERATED HTML CART ITEMS ARE TWO AND VERY CORRECT

    // GET THE CONTAINER OF ONE LOOPED 2RU GENERATED ITEM on the page as ONE
    const cartItemContainer = document.querySelectorAll(
      ".jasmine-cart-item-container"
    );
    expect(cartItemContainer.length).toEqual(2);

    // CHECKING IF THE PRODUCT OF THE SECOND CART IS EQUAL TO 1
    const productQuantityContainerElement2 = document.querySelector(
      `.jasmine-product-quantity-${productId2}`
    );

    // CHECK IF THE INNER TEXT CONTAINS "Quantity:  1"
    expect(productQuantityContainerElement2.innerText).toContain("Quantity: 1");

    // CHECKING IF THE PRODUCT OF THE FIRST CART IS EQUAL TO 2
    const productQuantityContainerElement1 = document.querySelector(
      `.jasmine-product-quantity-${productId1}`
    );

    // CHECK IF THE INNER TEXT CONTAINS "Quantity:  2"
    expect(productQuantityContainerElement1.innerText).toContain("Quantity: 2");
  });

  //SECOND TEST
  // Test to check how the page behaves
  // Test to check the delete button behavior
  it("REMOVES A PRODUCT FROM THE PAGE", function () {
    // Render the cart items in the orderSummary.js file
    renderCartItems();

    // Check for the delete link functionality
    const deleteLinkBtn1 = document.querySelector(
      `.jasmine-delete-quantity-link-${productId1}`
    );

    // Deleting the element
    // Use delete method if a delete click function was attached to the delete links
    deleteLinkBtn1.click();

    // Re-check the item container that remains on the page
    const cartItemContainer = document.querySelectorAll(
      ".jasmine-cart-item-container"
    );
    expect(cartItemContainer.length).toEqual(1);

    // Check if the deleted cart item is no longer on the page
    const cartItem1 = document.querySelector(
      `.jasmine-cart-item-container-${productId1}`
    );
    expect(cartItem1).toEqual(null);

    // Check the second item is still on page since we didn't delete it
    const cartItem2 = document.querySelector(
      `.jasmine-cart-item-container-${productId2}`
    );
    expect(cartItem2).not.toEqual(null);

    // Check if after deletion the cart array itself is updated
    // 1st - check if the cart item is now one as one is deleted already
    expect(cart.length).toEqual(1);
    // 2nd - check if the product's productId in the cart is the second item since the first is already null {that is, deleted}
    expect(cart[0].productId).toEqual(productId2); // gives true
  });
});

// EXPLANATION

/* In Jasmine, a "hook" refers to functions that run at specific points in the testing lifecycle. Hooks are used to set up the environment for tests or clean up after tests are run. These hooks allow you to execute code before or after a set of tests (or individual tests) in a Jasmine test suite.

Summary:
In Jasmine, hooks like beforeAll, afterAll, beforeEach, and afterEach allow you to run code at specific points in your test suite's lifecycle. This helps with setting up, isolating, and cleaning up the test environment effectively. */
