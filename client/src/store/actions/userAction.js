import {instanceJava, instanceNodeJs} from "../../config/axiosConfig";
import {createAsyncThunk} from "@reduxjs/toolkit";

export const getUsers = createAsyncThunk('users/fetchUsers', async (_, thunkAPI) => {
    try {
        const response = await instanceJava.get('/api/users');
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
});

export const getUserById = createAsyncThunk('users/fetchUserById', async (payload, thunkAPI) => {
    try {
        const response = await instanceJava.get(`/api/users/${payload}`);
        return response.data;
    }catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const getUserByFullname = createAsyncThunk('users/fetchUserByFullname', async (payload, thunkAPI) => {
    try {
        const response = await instanceJava.get(`/api/users/search`,{
            params: {
                fullname: payload,
            }
        });
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const createUser = createAsyncThunk('users/createUser', async (payload, thunkAPI) => {
    try {
        const response = await instanceJava.post('/api/users', payload);
        return response.data;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const updateUser = createAsyncThunk('users/updateUser', async (payload, thunkAPI) => {
    try {
        const {userId, ...updateField} = payload
        console.log('>> userId', userId)
        console.log('>> updateField', updateField);
        const response = await instanceJava.put(`/api/users/${userId}`, updateField);
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})

export const deleteUser = createAsyncThunk('users/deleteUser', async (payload, thunkAPI) => {
    try {
        const response = await instanceJava.delete(`/api/users/${payload.userId}`);
        return payload;
    } catch (error) {
        thunkAPI.rejectWithValue(error.response.data);
    }
})





