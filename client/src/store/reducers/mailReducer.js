import {createSlice} from '@reduxjs/toolkit';
import { sendMail } from '../actions/mailAction';

const initialState = {
    loading: false,
    error: null,
};

const mailSlice = createSlice({
    name: 'mail',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(sendMail.pending, (state) => {
                state.loading = true;
            })
            .addCase(sendMail.fulfilled, (state, action) => {
                state.loading = false;
            })
            .addCase(sendMail.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message;
            })

    },
});

export default mailSlice.reducer;
