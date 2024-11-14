import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import ScrollConfig from "./config/scrollConfig";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Dashboard/Admin_Dashboard";
import Users from "./pages/Admin/Admin_Users/Admin_Users";
import Products from "./pages/Admin/Admin_Products/Admin_Products";
import Orders from "./pages/Admin/Admin_Orders/Admin_Orders";
import Login from "./pages/Login/Login";
import Comparison from "./pages/Comparison/Comparison";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Estimation from "./pages/Estimation/Estimation";
import UserProfile from "./pages/User/UserProfile";
import AdminLogin from "./pages/Admin/Admin_Login/Admin_Login";
import LaptopsOrder from "./pages/Admin/Admin_LaptopsOrder/Admin_LaptopsOrder";
import Vouchers from "./pages/Admin/Admin_Vouchers/Admin_Vouchers";
import Unauthorized from "./pages/Unauthozired/Unauthozired";
import RoleProtectedRoute from "./Utils/verifyRole";
import store from "./store/reducers/store";
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "./store/reducers/store";
import Installment from "./pages/Admin/Admin_Installments/Admin_Installments";

function App() {
    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <ScrollConfig/>
                        <Routes>
                            <Route path="/" element={<Home/>}/>
                            <Route path="/user-profile/:id"
                                   element={
                                       <RoleProtectedRoute requiredRole={'user'}>
                                           <UserProfile/>
                                       </RoleProtectedRoute>
                                   }/>
                            <Route path="/admin" element={
                                <RoleProtectedRoute requiredRole={'admin'}>
                                    <Admin/>
                                </RoleProtectedRoute>
                            }/>
                            <Route path="/admin/order-items" element={
                                <RoleProtectedRoute requiredRole={'admin'}>
                                    <LaptopsOrder/>
                                </RoleProtectedRoute>
                            }/>
                            <Route path="/admin/installments" element={
                                <RoleProtectedRoute requiredRole={'admin'}>
                                    <Installment/>
                                </RoleProtectedRoute>
                            }/>
                            <Route path="/admin/vouchers" element={
                                <RoleProtectedRoute requiredRole={'admin'}>
                                    <Vouchers/>
                                </RoleProtectedRoute>
                            }/>
                            <Route path="/admin/login"
                                   element={
                                       <AdminLogin/>
                                   }
                            />
                            <Route path="/admin/users" element={
                                <RoleProtectedRoute requiredRole={'admin'}>
                                    <Users/>
                                </RoleProtectedRoute>
                            }/>
                            <Route path="/admin/products" element={
                                <RoleProtectedRoute requiredRole={'admin'}>
                                    <Products/>
                                </RoleProtectedRoute>
                            }/>
                            <Route path="/admin/orders" element={
                                <RoleProtectedRoute requiredRole={'admin'}>
                                    <Orders/>
                                </RoleProtectedRoute>
                            }/>
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/comparison" element={<Comparison/>}/>
                            <Route path="/productdetail/:id" element={<ProductDetail/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/estimation/:id" element={<Estimation/>}/>
                            <Route path='/unauthorized' element={<Unauthorized/>}/>
                        </Routes>
                    </Router>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
