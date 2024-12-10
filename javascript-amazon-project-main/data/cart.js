//create carts
export const cart = [];

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
    });
  }
}
