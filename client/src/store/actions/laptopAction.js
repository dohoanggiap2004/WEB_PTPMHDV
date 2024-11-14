import {instanceJava, instanceNodeJs} from "../../config/axiosConfig";
import {createAsyncThunk} from "@reduxjs/toolkit";

// Tạo async thunk để fetch sản phẩm
export const getLaptops = createAsyncThunk('laptops/fetchLaptops', async (_, thunkAPI) => {
    try {
        const response = await instanceJava.get('/api/laptops');
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getLaptopById = createAsyncThunk('laptops/fetchLaptopById', async (payload, thunkAPI) => {
    try {
        const response = await instanceJava.get(`/api/laptops/${payload}`);
        return response.data;
    }catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const getLaptopByModel = createAsyncThunk('laptops/fetchLaptopByModel', async (payload, thunkAPI) => {
    try {
        const response = await instanceJava.get(`/api/laptops/search`,{
            params: {
                model: payload,
            }
        });
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const createLaptop = createAsyncThunk('laptops/createLaptop', async (payload, thunkAPI) => {
    try {
        const response = await instanceJava.post('/api/laptops', payload);
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const updateLaptop = createAsyncThunk('laptops/updateLaptop', async (payload, thunkAPI) => {
    try {
        const { laptopId, ...updateField } = payload;
        console.log('check laptopId', laptopId);
        console.log('check updateField', updateField);
        const response = await instanceJava.put(`/api/laptops/${laptopId}`, updateField);
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const deleteLaptop = createAsyncThunk('laptops/deleteLaptop', async (payload, thunkAPI) => {
    try {
        const response = await instanceJava.delete(`/api/laptops/${payload.laptopId}`);
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})





