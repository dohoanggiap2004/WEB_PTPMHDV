function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

function addToCart(laptop) {
  const cart = getCart();
  console.log("Giỏ hàng trước khi thêm:", cart);
  const existingProductIndex = cart.findIndex(
    (item) => item.laptop_id === laptop.laptop_id
  );
  if (existingProductIndex !== -1) {
    // Nếu sản phẩm đã có, tăng số lượng
    cart[existingProductIndex].quantity += 1;
    console.log(cart);
  } else {
    // Nếu chưa có, thêm sản phẩm vào giỏ
    laptop.quantity = 1; // Gán số lượng ban đầu
    cart.push(laptop);
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  window.location.reload()
}

function removeCart(){
    localStorage.setItem('cart', [])
}

function removeItem(laptop_id){
    const cart = getCart()
    const index = cart.findIndex(item => item.laptop_id === laptop_id)
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    // window.location.reload()
}

export { getCart, addToCart, removeCart, removeItem };
