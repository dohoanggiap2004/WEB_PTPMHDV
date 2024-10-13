import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import ScrollConfig from "./config/scrollConfig";
import Home from "./pages/Home/Home";
import Admin from "./pages/Admin/Admin";
import Login from "./pages/Login/Login";
import Comparison from "./pages/Comparison/Comparison";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Register from "./pages/Register/Register";
import Cart from "./pages/Cart/Cart";
import Estimation from "./pages/Estimation/Estimation";
function App() {
  return (
    <>
      <Router>
        <ScrollConfig />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<Login />} />
          <Route path="/comparison" element={<Comparison />} />
          <Route path="/productdetail/:id" element={<ProductDetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/estimation/:id" element={<Estimation />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
