// src/redux/itemsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    selectedItemAdmin: 'dashboard',
    selectedItemUserProfile: 'profile',
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setSelectedItem(state, action) {
            state.selectedItemAdmin = action.payload; // Cập nhật selectedItem
        },
    },
});

export const { setSelectedItem } = itemsSlice.actions; // Xuất action
export default itemsSlice.reducer; // Xuất reducer
