// reducers/productSlice.js
import {createSlice} from '@reduxjs/toolkit';
import {getLaptops,
    getLaptopById,
    getLaptopByModel,
    getLaptopByModel2,
    updateLaptop,
    createLaptop,
    deleteLaptop,
    getLaptopsElasticByUserId,
    getLaptopsViewedByUserId,
    getLaptopSuggestion} from "../actions/laptopAction";

const laptopSlice = createSlice({
    name: 'laptops',
    initialState: {
        laptops: [],
        laptop: '',
        laptopsSearch: [],
        laptopsSuggestion: [],
        laptopsElastic: [],
        laptopsViewed: [],
        loading: false,
        loadingElastic: false,
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

            //get laptop suggestion
            .addCase(getLaptopSuggestion.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLaptopSuggestion.fulfilled, (state, action) => {
                state.loading = false;
                state.laptopsSuggestion = action.payload;
            })
            .addCase(getLaptopSuggestion.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //get laptop suggestion by elastic search
            .addCase(getLaptopsElasticByUserId.pending, (state) => {
                state.loadingElastic = true;
                state.error = null;
            })
            .addCase(getLaptopsElasticByUserId.fulfilled, (state, action) => {
                state.loadingElastic = false;
                state.laptopsElastic = action.payload;
            })
            .addCase(getLaptopsElasticByUserId.rejected, (state, action) => {
                state.loadingElastic = false;
                state.error = action.payload;
            })

            //get laptop viewed by user
            .addCase(getLaptopsViewedByUserId.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLaptopsViewedByUserId.fulfilled, (state, action) => {
                state.loading = false;
                state.laptopsViewed = action.payload;
            })
            .addCase(getLaptopsViewedByUserId.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            //get laptop by model
            .addCase(getLaptopByModel.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getLaptopByModel.fulfilled, (state, action) => {
                console.log('check payload', action.payload)
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
