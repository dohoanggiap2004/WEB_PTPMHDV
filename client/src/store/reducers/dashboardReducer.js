import {createSlice} from "@reduxjs/toolkit";
import {
    getUserQuantity,
    getAvailableProduct,
    getCountProductSales,
    getCalculateRevenue,
    getOrderQuantity,
    getBrandSold,
} from "../actions/dashboardAction";

const initialState = {
    quantityUsers: '',
    quantityAvailableProducts: '',
    quantityOrders: '',
    productSales: [],
    revenue: [],
    brandSold: [],
    loading: false,
    error: null,
}

const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    extraReducers: (builder) => {
        builder
            .addCase(getUserQuantity.fulfilled, (state, action) => {
                    state.quantityUsers = action.payload
                    state.loading = false;
                    state.error = null;
                }
            )

            .addCase(getAvailableProduct.fulfilled, (state, action) => {
                state.quantityAvailableProducts = action.payload
                state.loading = false;
                state.error = null;
            })

            .addCase(getCountProductSales.fulfilled, (state, action) => {
                state.productSales = action.payload
                state.loading = false;
                state.error = null;
            })

            .addCase(getCalculateRevenue.fulfilled, (state, action) => {
                console.log('>> revenue', action.payload)
                state.loading = false;
                state.error = null;
                state.revenue = action.payload
            })

            .addCase(getOrderQuantity.fulfilled, (state, action) => {
                state.loading = false;
                state.error = null;
                state.quantityOrders = action.payload
            })

            .addCase(getBrandSold.fulfilled, (state, action) => {
                console.log('>> brandSold', action.payload)

                state.loading = false;
                state.error = null;
                state.brandSold = action.payload
            })
    }
})

export default dashboardSlice.reducer;
