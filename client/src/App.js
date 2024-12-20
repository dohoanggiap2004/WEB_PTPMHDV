import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import "./App.css";
import ScrollConfig from "./config/scrollConfig";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Comparison from "./pages/Comparison/Comparison";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Estimation from "./pages/Estimation/Estimation";
import UserProfile from "./pages/User/UserProfile";
import Unauthorized from "./pages/Unauthozired/Unauthozired";
import RoleProtectedRoute from "./Utils/verifyRole";
import store from "./store/reducers/store";
import {Provider, useDispatch} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor} from "./store/reducers/store";
import Suggestion from "./pages/Suggestion/Suggestion";

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
                            <Route path="/login" element={<Login/>}/>
                            <Route path="/comparison" element={<Comparison/>}/>
                            <Route path="/productdetail/:id" element={<ProductDetail/>}/>
                            <Route path="/register" element={<Register/>}/>
                            <Route path="/cart" element={<Cart/>}/>
                            <Route path="/suggestion" element={<Suggestion/>}/>
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
