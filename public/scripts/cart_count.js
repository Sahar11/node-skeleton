let itemCount = 0;

$(".add-to-cart").click(function() {
  itemCount++;
  $(".cart-quantity").html(itemCount);
});

