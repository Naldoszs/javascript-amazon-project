// IMPORT CART VARIABLE
import { products, loadProducts } from "../data/products.js";
import { cart, addToCartList } from "../data/cart.js";
// import { cart as myCart } from "../data/cart.js";
//important all in a file as a object
/* import * as cartObject from "../data/cart.js";
//accessing as object syntex
cartObject.cart;
cartObject.addToCartList();
 */
// IMPORT PRICECENT  VARIABLE
import formatCurrency from "./utils/money.js";

// try use fetch
// Event listener for window load
/* window.addEventListener("load", () => {
  loadProducts(renderProductsGrid);
}); */

loadProducts(renderProductsGrid);

function renderProductsGrid() {
  let productsHTML = "";
  // LOOPING THROUGH THE PRODUCTS
  products.forEach((product) => {
    // CREATION OF HTML START
    const html = `<div class="product-container">
          <div class="product-image-container">
            <img
              class="product-image"
              src="${product.image}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="${product.getStarsUrl()}"
            />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">${product.getPrice()}</div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          ${product.extraInfoHTML()} 

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="js-add-to-cart-button add-to-cart-button button-primary" data-product-id = "${
            product.id
          }">Add to Cart</button>
        </div>`;
    // CREATION OF HTML END
    productsHTML += html;
  });

  // PLACING THE PRODUCTSHTML ON THE WEBPAGE
  const productsGridDisplay = document.querySelector(".js-products-grid");
  productsGridDisplay.innerHTML = productsHTML;

  //FUNCTION TO DISPLAY CART WITH DOM : METHOD 2
  let cartQuantity;
  function displayCartQuantity() {
    // DISPLAYING THE CART QUANTITY IN THE CART ICON AT THE TOP RIGHT OF THE PAGE
    cartQuantity = 0;
    cart.forEach((cartItem) => {
      cartQuantity += cartItem.quantity;
    });

    // DISPLAY THE CART QUANTITY ON THE PAGE USING DOM
    const cartQuantityDisplay = document.querySelector(".js-cart-quantity");

    cartQuantityDisplay.innerHTML = `${cartQuantity}`;
  }

  // GETTING THE  JS-ADD-TO-CART BTN
  const addToCartBtn = document.querySelectorAll(".js-add-to-cart-button");

  // START OF ADDTOCARTBTN.FOREACH()
  // LOOP THROUGH ALL JS-ADD-TO-CART BTNS
  addToCartBtn.forEach((btn) => {
    // START OF BTN.ADDEVENTLISTNER FUNCTION
    // ADD EVENT LISTNER TO ALL ADD-TO-CART-BTNS
    btn.addEventListener("click", () => {
      // GETTING THE DATA- ATTRIBUTES ATTACHED TO THE INDIVIDUAL BTN
      // GIVES A DOMSTRINGMAP WHICH IS OBJECT-LIKE
      // THEN GETTING THE DATA-PRODUCT-NAME ATTRIBUTE USING CAMEL CASE (PRODUCTNAME) FROM INITIAL KEBAB CASE (DATA-PRODUCT-NAME)
      const productId = btn.dataset.productId;

      // PUSH IN CART ARRAY AS AN OBJECT
      // & ALSO CHECKING IF WE ALREADY HVE A MATCHING PRODUCTNAME IN THE CART SO THE QUANTITY ALWAYS INCREASE BY 1 BFR PUSHING IN THE CART

      // INVOKE THE FUNCTION
      addToCartList(productId);

      // INVOKE FUNCTION
      displayCartQuantity();

      // LOG IN THE CONSOLE
      /*     console.log(cart);
    console.log(cartQuantity); */
    });
    // END OF BTN.ADDEVENTLISTNER FUNCTION
  });
}
