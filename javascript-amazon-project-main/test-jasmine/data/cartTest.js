import { addToCartList, cart, loadFromStorage } from "../../data/cart.js";

// RUN UNIT TEST - that is, 'ONE PIECE OF CODE'
describe("TEST SUITE: cart function", function () {
  // RUNNING TEST COVERAGE (that., multiple if-statements tests)
  // TEST FOR IF STATEMENT IN THE addToCartList function
  it("ADDS AN EXISTING PRODUCT TO THE CART", function () {
    //MOCK - to fake set item method - not to dent our code base
    spyOn(localStorage, "setItem"); // to avoid the addToCartList("e43638ce-6aa0-4b85-b27f-e1d07eb678c6") below function saving to local storage
    //MOCK A PRDUCT IS ALREADY IN THE CART
    spyOn(localStorage, "getItem").and.callFake(function () {
      return JSON.stringify([
        {
          productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
          quantity: 1,
          deliveryOptionsId: "1",
        },
      ]);
    });
    //re-loading  the cart from storage
    loadFromStorage();

    addToCartList("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

    //CHECK IF THE NEW PRODUCT IS IN THE CART
    expect(cart.length).toEqual(1); //
    //to check if set item local storage ws called at some point //bcos we cant check what is in local storage because setItem has been mocked to save fake item to local storage
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);

    // Check if localStorage.setItem was called with the correct arguments
    const expectedCart = JSON.stringify(cart);
    expect(localStorage.setItem).toHaveBeenCalledWith("cart", expectedCart);

    // check if the product's id product pushed to the cart is equal to the string ("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

    // to expect the quantity in the cart be increased by 1 so it equals '2'
    expect(cart[0].quantity).toEqual(2);
  });

  // TEST FOR ELSE STATEMENT IN THE addToCartList function
  it("ADDS A NEW PRODUCT TO THE CART", function () {
    //MOCK - to fake set item method - not to dent our code base
    spyOn(localStorage, "setItem"); // to avoid the addToCartList("e43638ce-6aa0-4b85-b27f-e1d07eb678c6") below function saving to local storage

    //MOCK - FAKE  GET ITEM METHOD ON LOCAL STORAGE OBJECT - to avoid  a flaky test in the local storage
    spyOn(localStorage, "getItem").and.callFake(function () {
      return JSON.stringify([]); // because localstorage.getItem must get a JSON stringied string from the local storage initially;
    });

    //re-loading the cart to cancel line1 effect of loading cart item // to avoid error
    loadFromStorage();

    // console.log(localStorage.getItem("cart"));

    addToCartList("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

    //CHECK IF THE NEW PRODUCT IS IN THE CART
    expect(cart.length).toEqual(1); //fails because it equals 2 // since at the cart array at the cart.js file we loading originally from local storage to start with and the item(s) in the localstorage can be very dynamic - this is called FLAKY TEST [ A TEAT THAT SOMETIMES PASSES AND SOMETIMES FAILS EVEN IF WE DONT CHANGE THE TEST] - so we use MOCK

    //to check if set item local storage ws called at some point //bcos we cant check what is in local storage because setItem has been mocked to save fake item to local storage
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);

    // Check if localStorage.setItem was called with the correct arguments
    const expectedCart = JSON.stringify(cart);
    expect(localStorage.setItem).toHaveBeenCalledWith("cart", expectedCart);

    // check if the product's id product pushed to the cart is equal to the string ("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

    expect(cart[0].productId).toEqual("e43638ce-6aa0-4b85-b27f-e1d07eb678c6");

    // to expect the quantity in the cart be equal to 1
    expect(cart[0].quantity).toEqual(1);
  });
});
