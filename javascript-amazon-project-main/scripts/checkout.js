// IMPORT CART ARRAY VARIABLE
import { cart, pushToNewCart } from "../data/cart.js";
// IMPORT PRODUCT ARRAY VARIABLE
import { products } from "../data/products.js";
// IMPORT PRICECENT VARIABLE
import { formatCurrency } from "./utils/money.js";

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

    // Generate the HTML if a matching product exists
    if (matchingProduct) {
      cartSummaryHTML += `
        <div class="cart-item-container">
          <div class="delivery-date">Delivery date: Tuesday, June 21</div>

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

            <div class="delivery-options">
              <div class="delivery-options-title">
                Choose a delivery option:
              </div>
              <div class="delivery-option">
                <input
                  type="radio"
                  checked
                  class="delivery-option-input"
                  name="delivery-option-${matchingProduct.id}"
                />
                <div>
                  <div class="delivery-option-date">Tuesday, June 21</div>
                  <div class="delivery-option-price">FREE Shipping</div>
                </div>
              </div>
              <div class="delivery-option">
                <input
                  type="radio"
                  class="delivery-option-input"
                  name="delivery-option-${matchingProduct.id}"
                />
                <div>
                  <div class="delivery-option-date">Wednesday, June 15</div>
                  <div class="delivery-option-price">$4.99 - Shipping</div>
                </div>
              </div>
              <div class="delivery-option">
                <input
                  type="radio"
                  class="delivery-option-input"
                  name="delivery-option-${matchingProduct.id}"
                />
                <div>
                  <div class="delivery-option-date">Monday, June 13</div>
                  <div class="delivery-option-price">$9.99 - Shipping</div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
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
