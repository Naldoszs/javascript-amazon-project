import { cart } from "../../data/cart.js";

import { products, getMatchingProducts } from "../../data/products.js";

import { getDeliveryOptions } from "./orderSummary.js";

import { formatCurrency } from "../utils/money.js";

export function renderPaymentSummary() {
  let productPriceCents = 0;
  let shippingPriceCents = 0;
  let totalTaxPriceCents = 0;
  let estimatedTaxPriceCents = 0;
  let orderTotalPriceCents = 0;

  //LOOP THROUGH CART
  cart.forEach((cartItem) => {
    // const productId = cartItem.productId;
    //INVOKE FUNCTION TO RETURN MATCHING PRODUCT
    const matchingProduct = getMatchingProducts(cartItem.productId);

    //CALCULATE THE TOTAL PRICE OF PRODUCT IN THE CART
    productPriceCents += matchingProduct.priceCents * cartItem.quantity;

    //CALCULATE THE SHIPPING COST  OF PRODUCT IN THE CART
    // GET FULL DELIVERY OPTION IN CART // ftn to get it below
    const matchingDeliveryOption = getDeliveryOptions(
      cartItem.deliveryOptionsId
    );
    //CALCULATE THE TOTAL SHIPPING PRICE OF PRODUCT IN THE CART
    shippingPriceCents += matchingDeliveryOption.priceCents;
  });

  // CALCULATE THE TOTAL PRICE + SHIPPING COST B4 TAX
  totalTaxPriceCents = productPriceCents + shippingPriceCents;

  // CALCULATE TAX OF TOTALTAXPRICECENTS
  estimatedTaxPriceCents = totalTaxPriceCents * 0.1;

  // CALCULATE ORDER TOTAL
  orderTotalPriceCents = totalTaxPriceCents + estimatedTaxPriceCents;

  console.log(productPriceCents);
  console.log(shippingPriceCents);
  console.log(totalTaxPriceCents);
  console.log(estimatedTaxPriceCents);
  console.log(orderTotalPriceCents);

  const paymentSummaryHTML = ` <div class="payment-summary">
          <div class="payment-summary-title">Order Summary</div>

          <div class="payment-summary-row">
            <div>Items (3):</div>
            <div class="payment-summary-money">$${formatCurrency(
              productPriceCents
            )}</div>
          </div>

          <div class="payment-summary-row">
            <div>Shipping &amp; handling:</div>
            <div class="payment-summary-money">$${formatCurrency(
              shippingPriceCents
            )}</div>
          </div>

          <div class="payment-summary-row subtotal-row">
            <div>Total before tax:</div>
            <div class="payment-summary-money">$${formatCurrency(
              totalTaxPriceCents
            )}</div>
          </div>

          <div class="payment-summary-row">
            <div>Estimated tax (10%):</div>
            <div class="payment-summary-money">$${formatCurrency(
              estimatedTaxPriceCents
            )}</div>
          </div>

          <div class="payment-summary-row total-row">
            <div>Order total:</div>
            <div class="payment-summary-money">$${formatCurrency(
              orderTotalPriceCents
            )}</div>
          </div>

          <button class="place-order-button button-primary">
            Place your order
          </button>
        </div>`;

  // GET THE HTML ON THE PAGE WITH DOM
  const paymentSummaryElement = document.querySelector(".js-payment-summary");
  //PUT ON DOM
  paymentSummaryElement.innerHTML = paymentSummaryHTML;
}
