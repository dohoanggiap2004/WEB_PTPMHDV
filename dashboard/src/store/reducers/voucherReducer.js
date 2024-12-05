// reducers/productSlice.js
import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {getVouchers, getVoucherById, getVoucherByCode, createVoucher, updateVoucher, deleteVoucher} from "../actions/voucherAction";

const voucherSlice = createSlice({
    initialState: {
        vouchers: [],
        loading: false,
        error: null,
    },
    name: 'vouchers',
    extraReducers: (builder) => {
        builder
            // get vouchers
            .addCase(getVouchers.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getVouchers.fulfilled, (state, action) => {
                state.loading = false;
                state.vouchers = action.payload;
            })
            .addCase(getVouchers.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // get voucher by id
            .addCase(getVoucherById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getVoucherById.fulfilled, (state, action) => {
                state.loading = false;
                state.vouchers = action.payload;
            })
            .addCase(getVoucherById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // get voucher by code
            .addCase(getVoucherByCode.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(getVoucherByCode.fulfilled, (state, action) => {
                state.loading = false;
                state.vouchers = action.payload;
            })
            .addCase(getVoucherByCode.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // post voucher
            .addCase(createVoucher.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(createVoucher.fulfilled, (state, action) => {
                state.loading = false;
                state.vouchers.push(action.payload);
            })
            .addCase(createVoucher.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // put voucher
            .addCase(updateVoucher.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(updateVoucher.fulfilled, (state, action) => {
                state.loading = false;
                const index = state.vouchers.findIndex(voucher => voucher.voucherId === action.payload.voucherId);
                if (index > -1) {
                    state.vouchers[index] = action.payload;
                }
            })
            .addCase(updateVoucher.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            })

            // delete voucher
            .addCase(deleteVoucher.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(deleteVoucher.fulfilled, (state, action) => {
                state.loading = false;
                state.vouchers = state.vouchers.filter(voucher => voucher.voucherId !== action.payload.voucherId);
            })
            .addCase(deleteVoucher.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload;
            });
    }
});

export default voucherSlice.reducer;
