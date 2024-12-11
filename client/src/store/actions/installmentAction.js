import {instanceAxios8000} from "../../config/axiosConfig";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getInstallments = createAsyncThunk('installments/fetchInstallments', async (_, thunkAPI) => {
    try {
        const response = await instanceAxios8000.get('/api/installments');
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getInstallmentsRecommendation = createAsyncThunk('installments/fetchInstallmentsRecommendation', async (_, thunkAPI) => {
    try {
        const response = await instanceAxios8000.get('/api/installments/recommended');
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getInstallmentById = createAsyncThunk('installments/fetchInstallmentById', async (payload, thunkAPI) => {
    try {
        const response = await instanceAxios8000.get(`/api/installments/${payload}`);
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const getInstallmentByCompany = createAsyncThunk('installments/fetchInstallmentByCompany', async (payload, thunkAPI) => {
    try {
        const response = await instanceAxios8000.get(`/api/installments/search`,{
            params: {
                company: payload,
            }
        });
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const createInstallment = createAsyncThunk('installments/createInstallment', async (payload, thunkAPI) => {
    try {
        const response = await instanceAxios8000.post('/api/installments', payload);
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const updateInstallment = createAsyncThunk('installments/updateInstallment', async (payload, thunkAPI) => {
    try {
        const {installmentId, ...updateField} = payload;
        console.log('>>installmentId', installmentId);
        console.log('>>updateField', updateField);
        const response = await instanceAxios8000.put(`/api/installments/${installmentId}`, updateField);
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const deleteInstallment = createAsyncThunk('installments/deleteInstallment', async (payload, thunkAPI) => {
    try {
        const response = await instanceAxios8000.delete(`/api/installments/${payload.installmentId}`);
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})







