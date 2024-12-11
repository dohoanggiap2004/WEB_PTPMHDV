import { combineReducers, createSlice } from '@reduxjs/toolkit';

const initialState = {
  loading: false,
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
    loginAdminSuccess(state, action) {
      state.loading = false;
      state.isLoginAdmin = true;
      state.role = 'admin'
    },
    loginFailure(state, action) {
      state.loading = false;
      state.error = action.payload;
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

export const { loginRequest, loginAdminSuccess, loginFailure, logoutAdminSuccess } = loginSlice.actions;
export default authReducer
