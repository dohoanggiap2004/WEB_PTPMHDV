import {createSlice} from '@reduxjs/toolkit';
import {addToCart, removeItem, clearCart, updateQuantity} from '../actions/cartAction';

const initialState = {
    cart: [],
    loading: false,
    error: null,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addToCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(addToCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(addToCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            //update quantity
            .addCase(updateQuantity.fulfilled, (state, action) => {
                state.cart = action.payload;
            })


            .addCase(removeItem.pending, (state) => {
                state.loading = true;
            })
            .addCase(removeItem.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(removeItem.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

            .addCase(clearCart.pending, (state) => {
                state.loading = true;
            })
            .addCase(clearCart.fulfilled, (state, action) => {
                state.loading = false;
                state.cart = action.payload;
            })
            .addCase(clearCart.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            });
    },
});

export default cartSlice.reducer;
