// IMPORT CART ARRAY VARIABLE
import {
  cart,
  pushToNewCart,
  saveCartItemsToLocalStorage,
  updateDeliveryOption,
} from "../data/cart.js";
// IMPORT PRODUCT ARRAY VARIABLE
import { products } from "../data/products.js";
// IMPORT PRICECENT VARIABLE
import { formatCurrency } from "./utils/money.js";

import { hello } from "https://unpkg.com/supersimpledev@1.0.1/hello.esm.js";

import dayjs from "https://unpkg.com/dayjs@1.11.10/esm/index.js";

import { deliveryOptions } from "../data/deliveryOptions.js";

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

    // GET FULL DELIVERY OPTION IN CART
    const deliveryOptionId = cartItem.deliveryOptionsId;
    const matchingDeliveryOption = deliveryOptions.find(
      (option) => option.id === deliveryOptionId
    );

    if (!matchingProduct || !matchingDeliveryOption) {
      console.error(
        `Invalid product or delivery option for product ID: ${productId}`
      );
      return;
    }

    // GENERATE VARIABLE FOR DATE
    const today = dayjs();
    const deliveryDate = today.add(matchingDeliveryOption.deliveryDays, "days");
    const dateString = deliveryDate.format("dddd, MMMM D");

    // Generate the HTML
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
  });

  // Render the cart summary HTML
  const orderSummaryElement = document.querySelector(".js-order-summary");
  orderSummaryElement.innerHTML = cartSummaryHTML;

  // Re-attach event listeners after rendering
  attachDeleteListeners();
  attachDeliveryOptionListeners();
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

// FUNCTION TO ATTACH DELIVERY OPTION LISTENERS
function attachDeliveryOptionListeners() {
  const optionInDeliveryOptionsElements = document.querySelectorAll(
    ".js-delivery-option"
  );

  optionInDeliveryOptionsElements.forEach((optionElement) => {
    optionElement.addEventListener("click", () => {
      const deliveryOptionId = optionElement.dataset.deliveryOptionId;
      const productId = optionElement.dataset.productId;

      updateDeliveryOption(deliveryOptionId, productId);
      renderCartItems();
    });
  });
}

// FUNCTION TO GENERATE DELIVERY OPTIONS HTML
function deliveryOptionsHTML(matchingProduct, cartItem) {
  return deliveryOptions
    .map((deliveryOption) => {
      // GENERATE VARIABLE FOR DATE
      const today = dayjs();
      const deliveryDate = today.add(deliveryOption.deliveryDays, "days");
      const dateString = deliveryDate.format("dddd, MMMM D");

      // GENERATE VARIABLE FOR PRICE
      const priceString =
        deliveryOption.priceCents === 0
          ? "FREE"
          : `$${formatCurrency(deliveryOption.priceCents)} -`;

      // GENERATING THE ISCHECKED VARIABLE
      const isChecked = deliveryOption.id === cartItem.deliveryOptionsId;

      return `
        <div class="js-delivery-option delivery-option" data-product-id="${
          matchingProduct.id
        }" data-delivery-option-id="${deliveryOption.id}">
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
    })
    .join("");
}

// EXTERNAL LIBRARIES FNTNS
hello();

const date = dayjs();
const deliveryDate = date.add(1, "days");
const formattedDate = deliveryDate.format("dddd, MMMM D");
console.log(formattedDate);
