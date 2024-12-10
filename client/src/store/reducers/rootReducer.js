import { combineReducers } from 'redux';
import authReducer from './authReducer';
import itemReducer from "./itemReducer";
import laptopReducer from "./laptopReducer";
import orderReducer from "./orderReducer";
import voucherReducer from "./voucherReducer";
import userReducer from "./userReducer";
import dashboardReducer from "./dashboardReducer";
import installmentReducer from "./installmentReducer";
import brandReducer from "./brandReducer";
import cardReducer from "./cartReducer";
// Kết hợp các reducer
const rootReducer = combineReducers({
  auth: authReducer,
  item: itemReducer,
  laptop: laptopReducer,
  order: orderReducer,
  voucher: voucherReducer,
  user: userReducer,
  dashboard: dashboardReducer,
  installment: installmentReducer,
  brand: brandReducer,
  cart: cardReducer,
});

export default rootReducer;
