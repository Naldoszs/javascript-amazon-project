import { renderCartItems } from "../../scripts/checkout/orderSummary.js";

import { loadFromStorage } from "../../data/cart.js";

// RUN AN INTEGRATED TEST
// checking for two things
/* 1. how the page looks &
2. how the page behaves */
//CREATE TEST SUITE
describe("TEST SUITE: renderSummary Function", () => {
  it("displays the cart", () => {
    // GET THE CONTAINER TO DiSPLAY THE TEST //typical contaimer we used in our orderSummary js file
    const orderSummaryContainerEl = document.querySelector(
      ".jasmine-test-container"
    );
    orderSummaryContainerEl.innerHTML = `
    <div class="js-order-summary"></div>
    <div class="js-payment-summary"></div>
    `;

    // we loaded the carts to be generated from the local storage so,

    //MOCK - to fake set item method - not to dent our code base
    spyOn(localStorage, "setItem"); // to avoid the addToCartList("e43638ce-6aa0-4b85-b27f-e1d07eb678c6") below function saving to local storage

    //STORE A PRODUCT ID IN ARIABLE TO RE-USE LATER
    const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

    //MOCK A PRDUCT IS ALREADY IN THE CART
    spyOn(localStorage, "getItem").and.callFake(function () {
      return JSON.stringify([
        // FIRST ITEM
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionsId: "1", //ASSUMING
        },
        // end  FIRST ITEM
        // SECOND ITEM
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionsId: "2", //ASSUMING
        },
        // end  SECOND ITEM
      ]);
    });

    //re-loading  the cart from storage
    loadFromStorage();

    // render the cart items
    renderCartItems();

    //checking if the generated html cart items are two and very CORRECT

    // GET THE CONTAINER OF ONE LOOPED 2RU GENERATED ITEM on the page as ONE

    const cartItemContainer = document.querySelectorAll(
      ".jasmine-cart-item-container"
    );
    expect(cartItemContainer.length).toEqual(2);

    //CHECKING IF THE PRODUCT OF THE SECOND CART IS EQUAL TO 1

    const productQuantityContainerElement2 = document.querySelector(
      `.jasmine-product-quantity-${productId2}`
    );

    // console.log(productQuantityContainerElement2);

    // CHECK IF THE INNER TEXT CONTAINS "Quantity:  2"
    expect(productQuantityContainerElement2.innerText).toContain("Quantity: 1");

    //CHECK IF THE PRODUCT OF THE FIRST CART IS EQUAL TO 2
    const productQuantityContainerElement1 = document.querySelector(
      `.jasmine-product-quantity-${productId1}`
    );

    // console.log(productQuantityContainerElement2);

    // CHECK IF THE INNER TEXT CONTAINS "Quantity:  2"
    expect(productQuantityContainerElement1.innerText).toContain("Quantity: 2");
  });

  // test to check how the page behaves
  //test to check the delete btn behaviour
  it("REMOVES A PRODUCT FROM THE PAGE", function () {
    //function start
    // GET THE CONTAINER TO DiSPLAY THE TEST //typical contaimer we used in our orderSummary js file
    const orderSummaryContainerEl = document.querySelector(
      ".jasmine-test-container"
    );
    orderSummaryContainerEl.innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
      `;

    // we loaded the carts to be generated from the local storage so,

    //MOCK - to fake set item method - not to dent our code base
    spyOn(localStorage, "setItem"); // to avoid the addToCartList("e43638ce-6aa0-4b85-b27f-e1d07eb678c6") below function saving to local storage

    //STORE A PRODUCT ID IN ARRAY TO RE-USE LATER
    const productId1 = "e43638ce-6aa0-4b85-b27f-e1d07eb678c6";
    const productId2 = "15b6fc6f-327a-4ec4-896f-486349e85a3d";

    //MOCK A PRDUCT IS ALREADY IN THE CART
    spyOn(localStorage, "getItem").and.callFake(function () {
      return JSON.stringify([
        // FIRST ITEM
        {
          productId: productId1,
          quantity: 2,
          deliveryOptionsId: "1", //ASSUMING
        },
        // end  FIRST ITEM
        // SECOND ITEM
        {
          productId: productId2,
          quantity: 1,
          deliveryOptionsId: "2", //ASSUMING
        },
        // end  SECOND ITEM
      ]);
    });

    //re-loading  the cart from storage
    loadFromStorage();
    //render the cart items in the orderSumary js file
    renderCartItems();

    //check for the delete link funtionality

    const deleteLinkBtn1 = document.querySelector(
      `.jasmine-delete-quantity-link-${productId1}`
    );

    //deleting the element
    //use delete method is a delete click function was attached to the delete links
    deleteLinkBtn1.click();

    //re-check the item container that remian on the page
    const cartItemContainer = document.querySelectorAll(
      ".jasmine-cart-item-container"
    );
    expect(cartItemContainer.length).toEqual(1);

    //check if the deleted cart item is no longer on the page
    //get the cart item jus deleted
    const cartItem1 = document.querySelector(
      `.jasmine-cart-item-container-${productId1}`
    );
    expect(cartItem1).toEqual(null);

    //check the second item is still on page
    //since we didnt delete it
    const cartItem2 = document.querySelector(
      `.jasmine-cart-item-container-${productId2}`
    );
    expect(cartItem2).not.toEqual(true);

    //check if after deletion the cart array itself is updated

    //import the cart
    //stop at 17:21:58

    //function end
  });
});
