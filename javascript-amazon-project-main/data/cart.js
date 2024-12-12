//create carts
export let cart = JSON.parse(localStorage.getItem("cart")) || [
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

// FUNCTION TO ADD ITEM TO CART LISTING  METHOD 1
/* function addToCartList(productId) {
  // START OF OBJECT
  let matchingItem;
  cart.forEach((cartItem) => {
    // NOTE THAT ITEM STANDS FOR INDIVIDUAL OBJECT TO BE PUSHED IN THE CART ARRAY
    if (cartItem.productId === productId) {
      matchingItem = cartItem;
    }
  });

  // IF THERE IS A MATCHING OBJECT WHICH HAVE SAME PRODUCTNAME;
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    // ELSE IF THERE IS NO MATCHING OBJECT WITH SAME PRODUCT NAME IN THE CART ARRAY
    cart.push({
      productId, // PRODUCTID: PRODUCTID,
      quantity: 1,
    });
  }
  // END OF OBJECT
} */

//ADD TO CART FUNCTION
export function addToCartList(productId) {
  // Use find to search for a matching item
  let matchingItem = cart.find((cartItem) => cartItem.productId === productId);

  // If a matching item is found, increase its quantity
  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    // Otherwise, add a new item to the cart
    cart.push({
      productId,
      quantity: 1,
      deliveryOptionsId: "1", //ASSUMING
    });
  }
  // FUNCTION TO SAVE TO LOCAL STORAGE
  saveCartItemsToLocalStorage();
}

//FUNCTION TO PUSH UNDELETED CART ARRAYS TO NEW CART
export function pushToNewCart(productId) {
  cart = cart.filter((cartItem) => cartItem.productId !== productId);

  // SAVING TO LOCAL STORAGE
  saveCartItemsToLocalStorage();
}

//FUNCTION TO SAVE CART ITEMS TO LOCAL STORAGE

export function saveCartItemsToLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

/* export function saveCartItemsToLocalStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Failed to save to localStorage:", error);
  }
} */
