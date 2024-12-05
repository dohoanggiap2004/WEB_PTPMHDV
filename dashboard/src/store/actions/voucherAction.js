import {instanceAxios8000} from "../../config/axiosConfig";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getVouchers = createAsyncThunk('vouchers/fetchVouchers', async (_, thunkAPI) => {
    try {
        const response = await instanceAxios8000.get('/api/vouchers');
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getVoucherById = createAsyncThunk('vouchers/fetchVoucherById', async (payload, thunkAPI) => {
    try {
        const response = await instanceAxios8000.get(`/api/vouchers/${payload}`);
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const getVoucherByCode = createAsyncThunk('vouchers/fetchVoucherByCode', async (payload, thunkAPI) => {
    try {
        const response = await instanceAxios8000.get(`/api/vouchers/search`,{
            params: {
                voucherCode: payload,
            }
        });
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const createVoucher = createAsyncThunk('vouchers/createVoucher', async (payload, thunkAPI) => {
    try {
        const response = await instanceAxios8000.post('/api/vouchers', payload);
        return response.data.newVoucher;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const updateVoucher = createAsyncThunk('vouchers/updateVoucher', async (payload, thunkAPI) => {
    try {
        const response = await instanceAxios8000.put('/api/vouchers', payload);
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const deleteVoucher = createAsyncThunk('vouchers/deleteVoucher', async (payload, thunkAPI) => {
    try {
        console.log('voucerhId', payload)
        const response = await instanceAxios8000.delete('/api/vouchers', {data: payload});
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})





