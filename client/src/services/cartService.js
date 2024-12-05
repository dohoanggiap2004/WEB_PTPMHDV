function getCart() {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}

function addToCart(laptop) {
    const cart = getCart();
    console.log("Giỏ hàng trước khi thêm:", cart);

    // Tìm sản phẩm trong giỏ
    const existingProductIndex = cart.findIndex(
        (item) => item.laptopId === laptop.laptopId
    );

    if (existingProductIndex !== -1) {
        // Nếu sản phẩm đã tồn tại, tăng số lượng
        cart[existingProductIndex].quantity += 1;
        console.log("Cập nhật giỏ hàng:", cart);
    } else {
        // Nếu sản phẩm chưa tồn tại, thêm sản phẩm mới
        const newLaptop = { ...laptop, quantity: 1 }; // Tạo bản sao và thêm thuộc tính quantity
        cart.push(newLaptop);
        console.log("Sản phẩm mới được thêm:", newLaptop);
    }

    // Cập nhật localStorage
    localStorage.setItem("cart", JSON.stringify(cart));

    // Cập nhật UI
    window.location.reload();
}

function removeCart(){
    localStorage.setItem('cart', [])
    window.location.reload()
}

function removeItem(laptopId){
    const cart = getCart()
    const index = cart.findIndex(item => item.laptopId === laptopId)
    cart.splice(index, 1)
    localStorage.setItem('cart', JSON.stringify(cart))
    window.location.reload()
}

export { getCart, addToCart, removeCart, removeItem };
