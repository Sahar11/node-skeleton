// Client facing scripts here
// add products to cart
const cart_czount = require('./cart_count');

// eslint-disable-next-line func-style
function addToCartClicked(id, description, thumbnailUrl, price) {
  let cart = JSON.parse(localStorage.getItem("cart"));

  if (!cart) {
    cart = [];
  }
  const cartItem = cart.find(item => item.id === id);

  if (cartItem) {

    cartItem.quantity++;
  } else {
    cart.push({id, quantity: 1, description, thumbnailUrl, price});

  }
  localStorage.setItem("cart", JSON.stringify(cart)
  );
}

// eslint-disable-next-line func-style
function getCart() {
  const cart = JSON.parse(localStorage.getItem("cart"));
  return cart;

}

//render id on the checkout

// eslint-disable-next-line func-style


// eslint-disable-next-line func-style
function renderCheckout() {
  const checkOutContainer = document.getElementById("checkout-container");
  const cart = getCart();
  const array = [];
  cart.forEach(item => {

    checkOutContainer.innerHTML += `


    <section> <div class="container menus">
      <div class="row">

        <div class="item col-sm-6">
          <section class="menu">
            <img class="thumbnail" src="${item.thumbnailUrl}" alt="" />
            <div class="description">
            ${item.description}
              <p class="price">${item.price}</p>

              <div class="quantity">

                <input value="${item.quantity}" class="box-size" type="number" placeholder="0">

            </div>
            </div>
          </section>

        </div>


      </div>
    </div></section>
    `;
    array.push(item);

  });
  totalCheckout(array);
}

// eslint-disable-next-line func-style

// eslint-disable-next-line func-style
function totalCheckout(array) {
  let totalAmount =  0;
  let totalItems = 0;
  array.forEach(item => {

    let price = item.price.replace('$','');
    totalItems += item.quantity;
    let total =  price * item.quantity;
    totalAmount += total;

  });
  totalcontainer.innerHTML += `
  <section class="total-amount">
  <h2>Order Total</h2>
  <h5>Items ${totalItems}</h5>
  <h5>Amount $${totalAmount}</h5>
  <button class= "sendMessage btn btn-warning">Place order</button>
  </section>
 `;
}
// eslint-disable-next-line func-style

