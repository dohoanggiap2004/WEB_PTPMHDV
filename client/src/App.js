import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css';
import Home from './pages/Home/Home'
import Admin from './pages/Admin/Admin'
import Login from './pages/Login/Login'
import Comparison from './pages/Comparison/Comparison'
import ProductDetail from './pages/ProductDetail/ProductDetail'
import Register from './pages/Register/Register'
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={ <Home/> }/>
          <Route path='/admin' element={ <Admin/> }/>
          <Route path='/login' element={ <Login/> }/>
          <Route path='/comparison/:id' element={ <Comparison/> }/>
          <Route path='/productdetail/:id' element={ <ProductDetail/> }/>
          <Route path='/register' element={ <Register/> }/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
