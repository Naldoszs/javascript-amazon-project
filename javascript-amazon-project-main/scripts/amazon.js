// arrays of product objects - collpased and using products.js' products array instead
/* const products = [
  //1st start
  {
    image: "images/products/athletic-cotton-socks-6-pairs.jpg",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 4.5,
      count: 87,
    },
    priceCents: 1290,
  },
  //1st end
  //2nd start
  {
    image: "images/products/intermediate-composite-basketball.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4.0,
      count: 127,
    },
    priceCents: 2095,
  },
  //2nd end
  //3rd start
  {
    image: "images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 4.5,
      count: 56,
    },
    priceCents: 795,
  },
  //3rd end
  //4th start
  {
    image: "images/products/black-2-slot-toaster.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5.0,
      count: 2190,
    },
    priceCents: 1795,
  },
  //4th end
  //5th start
  {
    image: "images/products/6-piece-white-dinner-plate-set.jpg",
    name: "6 Piece White Dinner Plate",
    rating: {
      stars: 4.0,
      count: 37,
    },
    priceCents: 2166,
  },
  //5th end
  //6th start
  {
    image: "images/products/6-piece-non-stick-baking-set.webp",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 4.5,
      count: 179,
    },
    priceCents: 3496,
  },
  //6th end
  //7th start
  {
    image: "images/products/plain-hooded-fleece-sweatshirt-yellow.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 318,
    },
    priceCents: 2500,
  },
  //7th end
  //8th start
  {
    image: "images/products/liquid-laundry-detergent-plain.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 4.5,
      count: 306,
    },
    priceCents: 2988,
  },
  //8th end
  //9th start
  {
    image: "images/products/luxury-tower-set-6-piece.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 4.5,
      count: 166,
    },
    priceCents: 3705,
  },
  //9th end
  //10th start
  {
    image: "images/products/women-chiffon-beachwear-coverup-black.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 4.5,
      count: 235,
    },
    priceCents: 1905,
  },
  //10th end
  //11th start
  {
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4.0,
      count: 3509,
    },
    priceCents: 1905,
  },
  //11th end
  //12th start
  {
    image: "images/products/knit-athletic-sneakers-gray.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4.0,
      count: 3509,
    },
    priceCents: 1905,
  },
  //12th end
]; */

// IMPORT CART VARIABLE
import { products } from "../data/products.js";
import { cart } from "../data/cart.js";
// import { cart as mycart } from "../data/cart.js";

let productsHTML = "";
//looping through the products
products.forEach((product) => {
  //creation of html start
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
  //creation of html end
  productsHTML += html;
});

console.log(productsHTML);
// placing the productsHTML on the webpage
const productsGridDisplay = document.querySelector(".js-products-grid");
productsGridDisplay.innerHTML = productsHTML;

//getting the  js-add-to-cart btn
const addToCartBtn = document.querySelectorAll(".js-add-to-cart-button");

//start of addToCartbtn.forEach()
//loop through all js-add-to-cart btns
addToCartBtn.forEach((btn) => {
  //start of btn.addEventListner function
  //add event listner to all add-to-cart-btns
  btn.addEventListener("click", () => {
    //getting the data- attributes attached to the individual btn
    //gives a DOMStringMap which is object-like
    //then getting the data-product-name attribute using camel case (productName) from initial kebab case (data-product-name)
    const productId = btn.dataset.productId;

    //push in cart array as an object
    // & also checking if we already hve a matching productName in the cart so the quantity always increase by 1 bfr pushing in the cart
    //start of object
    let matchingItem;
    cart.forEach((item) => {
      //note that item stands for individual object to be pushed in the cart array
      if (item.productId === productId) {
        matchingItem = item;
      }
    });
    // if there is a matching object which have same productName;
    if (matchingItem) {
      matchingItem.quantity += 1;
    } else {
      //else if there is no matching object with same product name in the cart array
      cart.push({
        productId, //productId: productId,
        quantity: 1,
      });
    }
    //end of object

    // displaying the cart quantity in the cart icon at the top right of the page
    let cartQuantity = 0;
    cart.forEach((item) => {
      cartQuantity += item.quantity;
    });

    //display the cart quantity on the page using DOM
    const cartQuantityDisplay = document.querySelector(".js-cart-quantity");

    cartQuantityDisplay.innerHTML = `${cartQuantity}`;

    console.log(cart);
    console.log(cartQuantity);
  });
  //end of btn.addEventListner function
});
//start of addToCartbtn.forEach()

//function for add to cart btn
function addToCart() {}
