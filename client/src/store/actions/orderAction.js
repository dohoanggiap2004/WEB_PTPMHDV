import {instanceJava, instanceNodeJs} from "../../config/axiosConfig";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getOrders = createAsyncThunk('orders/fetchOrders', async (_, thunkAPI) => {
    try {
        const response = await instanceJava.get('/api/orders');
        console.log(response);
        return response.data.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getOrderById = createAsyncThunk('orders/fetchOrderById', async (payload, thunkAPI) => {
    try {
        const response = await instanceJava.get(`/api/orders/${payload}`);
        return response.data;
    }catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const createOrder = createAsyncThunk('orders/createOrder', async (payload, thunkAPI) => {
    try {
        const response = await instanceJava.post('/api/orders', payload);
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const updateOrder = createAsyncThunk('orders/updateOrder', async (payload, thunkAPI) => {
    try {
        const response = await instanceJava.put('/api/orders', payload);
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const deleteOrder = createAsyncThunk('orders/deleteOrder', async (payload, thunkAPI) => {
    try {
        const response = await instanceNodeJs.delete('/api/orders', {data: payload});
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})





