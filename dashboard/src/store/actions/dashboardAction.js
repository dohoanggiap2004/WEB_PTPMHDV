import { instanceAxios8000 } from "../../config/axiosConfig";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getUserQuantity = createAsyncThunk('dashboard/getUserQuantity',
    async (_, thunkAPI) => {
        try {
            const response = await instanceAxios8000.get('api/statistics/users');
            console.log(response.data);
            return response.data.data;
        } catch (e) {
            console.error("Error fetching quantity of users:", e);
            return thunkAPI.rejectWithValue(e.response ? e.response.data : "Network Error");
        }
    }
);

export const getCalculateRevenue = createAsyncThunk('dashboard/getCalculateRevenue',
    async (_, thunkAPI) => {
        try {
            const response = await instanceAxios8000.get('api/statistics/revenue');
            console.log(response.data);
            return response.data.data;
        } catch (e) {
            console.error("Error calculating revenue:", e);
            return thunkAPI.rejectWithValue(e.response ? e.response.data : "Network Error");
        }
    }
);

export const getCountProductSales = createAsyncThunk('dashboard/getCountProductSale',
    async (_, thunkAPI) => {
        try {
            const response = await instanceAxios8000.get('api/statistics/products');
            console.log('product sale', response.data);
            return response.data.data;
        } catch (e) {
            console.error("Error counting product sales:", e);
            return thunkAPI.rejectWithValue(e.response ? e.response.data : "Network Error");
        }
    }
);

export const getAvailableProduct = createAsyncThunk('dashboard/getAvailableProduct', async (_, thunkAPI) => {
    try {
        const response = await instanceAxios8000.get('api/statistics/available-product');
        console.log(response.data);
        return response.data.data;
    } catch (error) {
        console.error("Error fetching available products:", error);
        return thunkAPI.rejectWithValue(error.response ? error.response.data : "Network Error");
    }
});

export const getOrderQuantity = createAsyncThunk('dashboard/getOrderQuantity',
    async (_, thunkAPI) => {
        try {
            const response = await instanceAxios8000.get('api/statistics/orders');
            console.log(response.data);
            return response.data.data;
        } catch (e) {
            console.error("Error fetching quantity of users:", e);
            return thunkAPI.rejectWithValue(e.response ? e.response.data : "Network Error");
        }
    }
);

export const getBrandSold = createAsyncThunk('dashboard/getBrandSold',
    async (_, thunkAPI) => {
        try {
            const response = await instanceAxios8000.get('api/brands/laptop-stats');
            console.log(response.data);
            return response.data;
        } catch (e) {
            console.error("Error fetching quantity sold of brand:", e);
            return thunkAPI.rejectWithValue(e.response ? e.response.data : "Network Error");
        }
    }
);
