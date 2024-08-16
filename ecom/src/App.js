import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './Inc/Header';
import Error from './Pages/Error';
import Home from './Pages/Home';
import Cart from './Pages/Cart';
import Orders from './Pages/Orders';
import AddNewProduct from './Pages/AddNewProduct';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route element={<Error />} path='*' />
        <Route element={<Home />} path='/' />
        <Route element={<Cart />} path='/cart' />
        <Route element={<Orders />} path='/orders' />
        <Route element={<AddNewProduct />} path='/add-new' />
      </Routes>
    </>
  );
}

export default App;
