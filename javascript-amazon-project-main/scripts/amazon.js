// ARRAYS OF PRODUCT OBJECTS - COLLAPSED AND USING PRODUCTS.JS' PRODUCTS ARRAY INSTEAD
/* const products = [
  //1ST START
  {
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1290,
  },
  //1ST END
  //2ND START
  {
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4.0,
      count: 127,
    },
    priceCents: 2095,
  },
  //2ND END
  //3RD START
  {
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 795,
  },
  //3RD END
  //4TH START
  {
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5.0,
      count: 2190,
    },
    priceCents: 1795,
  },
  //4TH END
  //5TH START
  {
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate",
    rating: {
      stars: 4.0,
      count: 37,
    },
    priceCents: 2166,
  },
  //5TH END
  //6TH START
  {
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 179,
    },
    priceCents: 3496,
  },
  //6TH END
  //7TH START
  {
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 318,
    },
    priceCents: 2500,
  },
  //7TH END
  //8TH START
  {
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 306,
    },
    priceCents: 2988,
  },
  //8TH END
  //9TH START
  {
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 166,
    },
    priceCents: 3705,
  },
  //9TH END
  //10TH START
  {
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235,
    },
    priceCents: 1905,
  },
  //10TH END
  //11TH START
  {
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4.0,
      count: 3509,
    },
    priceCents: 1905,
  },
  //11TH END
  //12TH START
  {
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4.0,
      count: 3509,
    },
    priceCents: 1905,
  },
  //12TH END
]; */

// IMPORT CART VARIABLE
import { products } from "../data/products.js";
import { cart, addToCartList } from "../data/cart.js";
// import { cart as myCart } from "../data/cart.js";
//important all in a file as a object
/* import * as cartObject from "../data/cart.js";
//accessing as object syntex
cartObject.cart;
cartObject.addToCartList();
 */

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
              src="images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${
              product.rating.count
            }</div>
          </div>

          <div class="product-price">$${(product.priceCents / 100).toFixed(
            2
          )}</div>

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

console.log(productsHTML);
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
    console.log(cart);
    console.log(cartQuantity);
  });
  // END OF BTN.ADDEVENTLISTNER FUNCTION
});
// START OF ADDTOCARTBTN.FOREACH()

// FUNCTION FOR ADD TO CART BTN
// FUNCTION ADDTOCART() {}
