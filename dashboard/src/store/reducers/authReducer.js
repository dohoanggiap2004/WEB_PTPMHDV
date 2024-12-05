import { combineReducers, createSlice } from '@reduxjs/toolkit';
import Cookies from 'js-cookie'

const initialState = {
  loading: false,
  isLoginUser: false,
  isLoginAdmin: false,
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
    loginAdminSuccess(state, action) {
      state.loading = false;
      state.isLoginAdmin = true;
      state.role = 'admin'
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
    logoutAdminSuccess(state) {
      state.isLoginAdmin = false;
      state.isLoginUser ? state.role = 'user' : state.role = '';
      state.error = null;
    },
  },
});


const authReducer = combineReducers({
    login: loginSlice.reducer,
})

export const { loginRequest, loginUserSuccess, loginAdminSuccess, loginFailure, logoutAdminSuccess, logoutUserSuccess } = loginSlice.actions;
export default authReducer
