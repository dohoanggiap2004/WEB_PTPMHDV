import {createAsyncThunk} from "@reduxjs/toolkit";
import {instanceJava, instanceNodeJs} from "../../config/axiosConfig";

export const getBrands = createAsyncThunk('brands/fetchBrands', async (_, thunkAPI) => {
    try {
        const response = await instanceJava.get('/api/brands');
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});
