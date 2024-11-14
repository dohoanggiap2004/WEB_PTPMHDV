import {instanceJava, instanceNodeJs} from "../../config/axiosConfig";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getVouchers = createAsyncThunk('vouchers/fetchVouchers', async (_, thunkAPI) => {
    try {
        const response = await instanceNodeJs.get('/api/vouchers');
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getVoucherById = createAsyncThunk('vouchers/fetchVoucherById', async (payload, thunkAPI) => {
    try {
        const response = await instanceNodeJs.get(`/api/vouchers/${payload}`);
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const getVoucherByCode = createAsyncThunk('vouchers/fetchVoucherByCode', async (payload, thunkAPI) => {
    try {
        const response = await instanceNodeJs.get(`/api/vouchers/search`,{
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
        const response = await instanceNodeJs.post('/api/vouchers', payload);
        return response.data.newVoucher;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const updateVoucher = createAsyncThunk('vouchers/updateVoucher', async (payload, thunkAPI) => {
    try {
        const response = await instanceNodeJs.put('/api/vouchers', payload);
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const deleteVoucher = createAsyncThunk('vouchers/deleteVoucher', async (payload, thunkAPI) => {
    try {
        const response = await instanceNodeJs.delete('/api/vouchers', {data: payload});
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})





