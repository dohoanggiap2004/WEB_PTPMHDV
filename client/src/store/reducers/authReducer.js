import { combineReducers, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
  isLoginUser: false,
  role: '',
  error: null,
};

const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    loginRequest(state) {
      state.loading = true;
      state.role = '';
      state.error = null;
    },
    loginUserSuccess(state, action) {
      state.loading = false;
      state.isLoginUser = true;
      state.role = 'user'
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    logoutUserSuccess(state) {
      state.isLoginUser = false;
      state.isLoginAdmin ? state.role = 'admin' : state.role = '';
      state.error = null; // Xóa lỗi nếu có
    },
  },
});


const authReducer = combineReducers({
    login: loginSlice.reducer,
})

export const { loginRequest, loginUserSuccess, loginFailure, logoutUserSuccess } = loginSlice.actions;
export default authReducer
