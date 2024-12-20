// reducers/productSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
    getInstallments,
    getInstallmentById,
    getInstallmentByCompany,
    getInstallmentsFilter,
    getInstallmentsRecommendation,
    createInstallment,
    updateInstallment,
    deleteInstallment
} from "../actions/installmentAction";

const installmentSlice = createSlice({
    initialState: {
        installments: [],
        installmentsFilter: [],
        loading: false,
        error: null,
    },
    name: 'installments',
    extraReducers: (builder) => {
        builder
            // get installments
            .addCase(getInstallments.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getInstallments.fulfilled, (state, action) => {
                state.loading = false;
                state.installments = action.payload;
            })
            .addCase(getInstallments.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // get installments recommendation
            .addCase(getInstallmentsRecommendation.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getInstallmentsRecommendation.fulfilled, (state, action) => {
                state.loading = false;
                state.installments = action.payload;
            })
            .addCase(getInstallmentsRecommendation.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // get installments filter
            .addCase(getInstallmentsFilter.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getInstallmentsFilter.fulfilled, (state, action) => {
                state.loading = false;
                state.installmentsFilter = action.payload;
            })
            .addCase(getInstallmentsFilter.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // get installment by id
            .addCase(getInstallmentById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getInstallmentById.fulfilled, (state, action) => {
                state.loading = false;
                state.installments = action.payload;
            })
            .addCase(getInstallmentById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // get installment by code
            .addCase(getInstallmentByCompany.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getInstallmentByCompany.fulfilled, (state, action) => {
                state.loading = false;
                state.installments = action.payload;
            })
            .addCase(getInstallmentByCompany.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // post installment
            .addCase(createInstallment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createInstallment.fulfilled, (state, action) => {
                state.loading = false;
                state.installments.push(action.payload);
            })
            .addCase(createInstallment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // put installment
            .addCase(updateInstallment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateInstallment.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.installments.findIndex(installment => installment.installmentId === action.payload.installmentId);
                if (index > -1) {
                    state.installments[index] = action.payload;
                }
            })
            .addCase(updateInstallment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // delete installment
            .addCase(deleteInstallment.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteInstallment.fulfilled, (state, action) => {
                state.loading = false;
                state.installments = state.installments.filter(installment => installment.installmentId !== action.payload.installmentId);
            })
            .addCase(deleteInstallment.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default installmentSlice.reducer;
