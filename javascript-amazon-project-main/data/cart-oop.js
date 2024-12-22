//create carts with oop
const cart = {
  //1st
  cartItems: undefined,

  //2nd
  // FUNCTION TO LOAD FROM LOCAL STORAGE
  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem("cart-oop")) || [
      // FIRST ITEM
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionsId: "1", //ASSUMING
      },
      // SECOND ITEM
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionsId: "2", //ASSUMING
      },
    ];
  },

  //third
  //ADD TO CART FUNCTION
  addToCartList(productId) {
    // Use find to search for a matching item
    let matchingItem = this.cartItems.find(
      (cartItem) => cartItem.productId === productId
    );

    // If a matching item is found, increase its quantity
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      // Otherwise, add a new item to the cart
      this.cartItems.push({
        productId,
        quantity: 1,
        deliveryOptionsId: "1", //ASSUMING
      });
    }
    // FUNCTION TO SAVE TO LOCAL STORAGE
    this.saveCartItemsToLocalStorage();
  },

  //fourth
  //FUNCTION TO PUSH UNDELETED CART ARRAYS TO NEW CART
  pushToNewCart(productId) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.productId !== productId
    );

    // SAVING TO LOCAL STORAGE
    this.saveCartItemsToLocalStorage();
  },

  //fifth
  //FUNCTION TO SAVE CART ITEMS TO LOCAL STORAGE
  saveCartItemsToLocalStorage() {
    localStorage.setItem("cart-oop", JSON.stringify(this.cartItems));
  },

  //sixth
  // FUNCTION TO UPDATE DELIVERY OPTION IN THE CART
  updateDeliveryOption(deliveryOptionsId, productId) {
    // Use find to search for a matching item
    const matchingItem = this.cartItems.find(
      (cartItem) => cartItem.productId === productId
    );

    matchingItem.deliveryOptionsId = deliveryOptionsId;

    this.saveCartItemsToLocalStorage();
  },
};

//load from storage for a start
cart.loadFromStorage();

//check the addtocart function
cart.addToCartList("04701903-bc79-49c6-bc11-1af7e3651358");

//another cart
//illustate real world scenario
const businessCart = {
  //1st
  cartItems: undefined,

  //2nd
  // FUNCTION TO LOAD FROM LOCAL STORAGE
  loadFromStorage() {
    this.cartItems = JSON.parse(localStorage.getItem("cart-business-oop")) || [
      // FIRST ITEM
      {
        productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
        quantity: 2,
        deliveryOptionsId: "1", //ASSUMING
      },
      // SECOND ITEM
      {
        productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
        quantity: 1,
        deliveryOptionsId: "2", //ASSUMING
      },
    ];
  },

  //third
  //ADD TO CART FUNCTION
  addToCartList(productId) {
    // Use find to search for a matching item
    let matchingItem = this.cartItems.find(
      (cartItem) => cartItem.productId === productId
    );

    // If a matching item is found, increase its quantity
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      // Otherwise, add a new item to the cart
      this.cartItems.push({
        productId,
        quantity: 1,
        deliveryOptionsId: "1", //ASSUMING
      });
    }
    // FUNCTION TO SAVE TO LOCAL STORAGE
    this.saveCartItemsToLocalStorage();
  },

  //fourth
  //FUNCTION TO PUSH UNDELETED CART ARRAYS TO NEW CART
  pushToNewCart(productId) {
    this.cartItems = this.cartItems.filter(
      (cartItem) => cartItem.productId !== productId
    );

    // SAVING TO LOCAL STORAGE
    this.saveCartItemsToLocalStorage();
  },

  //fifth
  //FUNCTION TO SAVE CART ITEMS TO LOCAL STORAGE
  saveCartItemsToLocalStorage() {
    localStorage.setItem("cart-business-oop", JSON.stringify(this.cartItems));
  },

  //sixth
  // FUNCTION TO UPDATE DELIVERY OPTION IN THE CART
  updateDeliveryOption(deliveryOptionsId, productId) {
    // Use find to search for a matching item
    const matchingItem = this.cartItems.find(
      (cartItem) => cartItem.productId === productId
    );

    matchingItem.deliveryOptionsId = deliveryOptionsId;

    this.saveCartItemsToLocalStorage();
  },
};

//load from storage for a start
businessCart.loadFromStorage();

console.log(cart);
console.log(businessCart);
