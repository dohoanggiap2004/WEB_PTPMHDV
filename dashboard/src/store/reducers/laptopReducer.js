// reducers/productSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getLaptops, getLaptopById, getLaptopByModel, getLaptopByModel2, updateLaptop, createLaptop, deleteLaptop} from "../actions/laptopAction";

const laptopSlice = createSlice({
    name: 'laptops',
    initialState: {
        laptops: [],
        laptop: '',
        laptopsSearch: [],
        loading: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            //get laptops
            .addCase(getLaptops.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLaptops.fulfilled, (state, action) => {
                state.loading = false;
                state.laptops = action.payload;
            })
            .addCase(getLaptops.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //get laptop by id
            .addCase(getLaptopById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLaptopById.fulfilled, (state, action) => {
                state.loading = false;
                state.laptop = action.payload;
            })
            .addCase(getLaptopById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //get laptop by model
            .addCase(getLaptopByModel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLaptopByModel.fulfilled, (state, action) => {
                state.loading = false;
                state.laptops = action.payload;
            })
            .addCase(getLaptopByModel.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //get laptop by model2
            .addCase(getLaptopByModel2.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLaptopByModel2.fulfilled, (state, action) => {
                state.loading = false;
                state.laptopsSearch = action.payload;
            })
            .addCase(getLaptopByModel2.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //post laptop
            .addCase(createLaptop.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createLaptop.fulfilled, (state, action) => {
                state.loading = false;
                state.laptops.push(action.payload);
            })
            .addCase(createLaptop.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //put laptop
            .addCase(updateLaptop.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateLaptop.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.laptops.findIndex(laptop => laptop.laptopId === action.payload.laptopId);
                if (index > -1) {
                    state.laptops[index] = action.payload;
                }
            })
            .addCase(updateLaptop.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //delete laptop
            .addCase(deleteLaptop.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteLaptop.fulfilled, (state, action) => {
                console.log(action.payload.laptopId);
                state.loading = false;
                state.laptops = state.laptops.filter(laptop => laptop.laptopId !== action.payload.laptopId);
            })
            .addCase(deleteLaptop.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    },
});

export default laptopSlice.reducer;
