import {createAsyncThunk} from "@reduxjs/toolkit";
import {instanceAxios8000} from "../../config/axiosConfig";

export const getBrands = createAsyncThunk('brands/fetchBrands', async (_, thunkAPI) => {
    try {
        const response = await instanceAxios8000.get('/api/brands');
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});
