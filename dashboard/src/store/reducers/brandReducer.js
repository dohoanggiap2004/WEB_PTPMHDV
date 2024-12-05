// reducers/productSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { getBrands } from "../actions/brandAction";

const brandSlice = createSlice({
    name: 'brands',
    initialState: {
        brands: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            //get brands
            .addCase(getBrands.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getBrands.fulfilled, (state, action) => {
                state.loading = false;
                state.brands = action.payload;
            })
            .addCase(getBrands.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // //get brand by id
            // .addCase(getBrandById.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            // })
            // .addCase(getBrandById.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.brands = action.payload;
            // })
            // .addCase(getBrandById.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload;
            // })
            //
            // //post brand
            // .addCase(createBrand.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            // })
            // .addCase(createBrand.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.brands.push(action.payload);
            // })
            // .addCase(createBrand.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload;
            // })
            //
            // //put brand
            // .addCase(updateBrand.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            // })
            // .addCase(updateBrand.fulfilled, (state, action) => {
            //     state.loading = false;
            //     const index = state.brands.findIndex(brand => brand.brandId === action.payload.brandId);
            //     if (index > -1) {
            //         state.brands[index] = action.payload;
            //     }
            // })
            // .addCase(updateBrand.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload;
            // })
            //
            // //delete brand
            // .addCase(deleteBrand.pending, (state) => {
            //     state.loading = true;
            //     state.error = null;
            // })
            // .addCase(deleteBrand.fulfilled, (state, action) => {
            //     state.loading = false;
            //     state.brands = state.brands.filter(brand => brand.brandId !== action.payload.brandId);
            // })
            // .addCase(deleteBrand.rejected, (state, action) => {
            //     state.loading = false;
            //     state.error = action.payload;
            // });
    },
});

export default brandSlice.reducer;
