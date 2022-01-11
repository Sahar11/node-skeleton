// Client facing scripts here
// add products to cart
const cart_czount = require('./cart_count');


// eslint-disable-next-line func-style
// function addToCartClicked(id) {
//   const addToCart = document.getElementsByClassName("add-to-cart");
//   console.log(id);
//   for (let i = 0; i < addToCart.length; i++) {
//     button = addToCart[i];
//   }
// }

// eslint-disable-next-line func-style

//A Function to Set a Cookie
// eslint-disable-next-line func-style
function addToCartClicked(id) {
//   document.cookie = "id=" + id + ";"  + "; path=/";
  // eslint-disable-next-line no-undef
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = [];
  }
  const cartItem = cart.find(item => item.id === id);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({id, quantity: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart)
  );
}

//A Function to Get a Cookie
// eslint-disable-next-line func-style
function getCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;

}

//render id on the checkout

function renderCheckout() {
  const checkOutContainer = document.getElementById("checkout-container");
  const cart = getCart();
  cart.forEach(item => {
    checkOutContainer.innerHTML += `
    <div> productId: ${item.id} </div>
    `;
  });
  // checkOutContainer.innerHTML;
}
