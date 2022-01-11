// Client facing scripts here
// add products to cart
const cart_czount = require('./cart_count');

function addToCartClicked(id) {
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
}
