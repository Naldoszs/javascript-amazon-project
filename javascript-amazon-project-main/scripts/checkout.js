// IMPORT CART ARRAY VARIABLE
import {
  cart,
  pushToNewCart,
  saveCartItemsToLocalStorage,
} from "../data/cart.js";
// IMPORT PRODUCT ARRAY VARIABLE
import { products } from "../data/products.js";
// IMPORT PRICECENT VARIABLE
import { formatCurrency } from "./utils/money.js";

import { hello } from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";

import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

import { deliveryOptions } from "../data/deliveryOptions.js";

//INTERNAL

// INVOKE THE FUNCTION TO RENDER THE CART ON PAGE LOAD
renderCartItems();

function renderCartItems() {
  let cartSummaryHTML = "";

  // GENERATING THE HTML TO DISPLAY
  cart.forEach((cartItem) => {
    const productId = cartItem.productId;

    // Find the matching product
    const matchingProduct = products.find(
      (product) => product.id === productId
    );

    //GET FULL DELIVERY OPTION IN CART
    const deliveryOptionId = cartItem.deliveryOptionsId;

    const matchingDeliveryOption = deliveryOptions.find(
      (option) => option.id === deliveryOptionId
    );

    //GENERATE VARIABLE FOR DATE
    const today = dayjs();
    const deliveryDate = today.add(matchingDeliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    // Generate the HTML if a matching product exists
    if (matchingProduct) {
      cartSummaryHTML += `
        <div class="cart-item-container">
          <div class="delivery-date">Delivery date: ${dateString}</div>

          <div class="cart-item-details-grid">
            <img
              class="product-image"
              src="${matchingProduct.image}"
            />

            <div class="cart-item-details">
              <div class="product-name">
                ${matchingProduct.name}
              </div>
              <div class="product-price">$${formatCurrency(
                matchingProduct.priceCents
              )}</div>
              <div class="product-quantity">
                <span> Quantity: <span class="quantity-label">${
                  cartItem.quantity
                }</span> </span>
                <span class="update-quantity-link link-primary">
                  Update
                </span>
                <span class="js-delete-quantity-link delete-quantity-link link-primary" data-product-id="${
                  matchingProduct.id
                }">
                  Delete
                </span>
              </div>
            </div>

            <div class="js-delivery-options delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
             ${deliveryOptionsHTML(matchingProduct, cartItem)}

            </div>
          </div>
        </div>`;
    } else {
      console.error(`Product with ID ${productId} not found.`);
      return;
    }
  });

  // Render the cart summary HTML
  const orderSummaryElement = document.querySelector(".js-order-summary");
  orderSummaryElement.innerHTML = cartSummaryHTML;

  // Re-attach event listeners after rendering
  attachDeleteListeners();
}

// FUNCTION TO DELETE A CART ITEM
function deleteCartItem(evt) {
  const productId = evt.target.dataset.productId;
  console.log(`Deleting product with ID: ${productId}`);

  // Update the cart
  pushToNewCart(productId);

  // SAVE TO LOCAL STORAGE
  saveCartItemsToLocalStorage(cart);

  // Re-render the cart
  renderCartItems();
}

// FUNCTION TO ATTACH DELETE LISTENERS
function attachDeleteListeners() {
  const deleteLinkElements = document.querySelectorAll(
    ".js-delete-quantity-link"
  );
  deleteLinkElements.forEach((deleteLink) => {
    deleteLink.addEventListener("click", deleteCartItem);
  });
}

// FTN TO GENERATE DELIVERYOPTIONS HTML
function deliveryOptionsHTML(matchingProduct, cartItem) {
  let htmlGenerated = "";

  deliveryOptions.forEach((deliveryOption) => {
    //GENERATE VARIABLE FOR DATE
    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");
    // GENERATE VARIABLE FOR PRICE
    const priceString =
      deliveryOption.priceCents === 0
        ? "FREE"
        : `$${formatCurrency(deliveryOption.priceCents)} -`;

    //GENERATING THE ISCHECKED VARIABLE
    const isChecked = deliveryOption.id === cartItem.deliveryOptionsId;

    htmlGenerated += `<div class="delivery-option">
        <input
        ${isChecked ? "checked" : ""}
          type="radio"
          class="delivery-option-input"
          name="delivery-option-${matchingProduct.id}"
        />
        <div>
          <div class="delivery-option-date">${dateString}</div>
          <div class="delivery-option-price">${priceString} Shipping</div>
        </div>
    </div>`;
  });

  return htmlGenerated;
}

//
//
//

//EXTERNAL

// EXTERNAL LIBRARIES FNTNS
hello();

const date = dayjs(); //GIVES TODAY'S DATE
const deliveryDate = date.add(1, "days"); //GIVES TODAY'S DATE + 7 DAYS IN TIME
const formattedDate = deliveryDate.format("dddd, MMMM D"); // GIVES IN THE FORMAT YOU WANT

console.log(formattedDate);

// TESTING
// console.log(deliveryOptionsHTML(matchingProduct));
