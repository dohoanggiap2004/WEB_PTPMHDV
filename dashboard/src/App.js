import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import ScrollConfig from "./config/scrollConfig";
import Admin from "./pages/Admin/Dashboard/Admin_Dashboard";
import Users from "./pages/Admin/Admin_Users/Admin_Users";
import Products from "./pages/Admin/Admin_Products/Admin_Products";
import Orders from "./pages/Admin/Admin_Orders/Admin_Orders";
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
import {useEffect} from "react";
import {instanceAxios8000} from "./config/axiosConfig";

function App() {
    useEffect(() => {
        const hasRun = localStorage.getItem("hasRun");
        if (!hasRun) {
            console.log("Logic này chỉ chạy lần đầu tiên!");

            // Thực hiện logic khởi tạo
            crawlLaptops();

            // Đánh dấu đã chạy
            localStorage.setItem("hasRun", "true");
        }
    }, []);

    const crawlLaptops = async () => {
        try {
            const response = await fetch('http://localhost:8080/data/500');
            console.log("Response:", await response.json());
        } catch (error) {
            console.error("Error:", error.message);
        }
    };

    return (
        <>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <Router>
                        <ScrollConfig/>
                        <Routes>
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
                            <Route path='/unauthorized' element={<Unauthorized/>}/>
                        </Routes>
                    </Router>
                </PersistGate>
            </Provider>
        </>
    );
}

export default App;
