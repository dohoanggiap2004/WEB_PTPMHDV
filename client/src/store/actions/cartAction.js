import {createAsyncThunk} from '@reduxjs/toolkit';

export const addToCart = createAsyncThunk('cart/addToCart', async (laptop, { getState }) => {
    const cart = getState().cart.cart; // Lấy giỏ hàng từ state
    console.log('check cart', cart);

    const existingProductIndex = cart.findIndex(item => item.laptopId === laptop.laptopId);

    let updatedCart;
    if (existingProductIndex !== -1) {
        updatedCart = cart.map((item, index) =>
            index === existingProductIndex
                ? { ...item, quantity: item.quantity + 1 } // Cập nhật số lượng của sản phẩm
                : item // Không thay đổi các sản phẩm khác
        );
    } else {
        updatedCart = [...cart, { ...laptop, quantity: laptop.quantity || 1 }];
    }

    return updatedCart;
});

export const updateQuantity = createAsyncThunk('cart/updateQuantity', async ({ laptopId, newQuantity }, { getState }) => {
    const cart = getState().cart.cart;
    return cart.map(item =>
        item.laptopId === laptopId ? {...item, quantity: newQuantity} : item
    );
});



export const removeItem = createAsyncThunk('cart/removeItem', async (laptopId, { getState }) => {
    const cart = getState().cart.cart;
    return cart.filter(item => item.laptopId !== laptopId);
});

export const clearCart = createAsyncThunk('cart/clearCart', async () => {
    return [];
});
