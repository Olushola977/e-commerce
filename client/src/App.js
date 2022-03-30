import './App.css';
import Admin from 'pages/adminpage/Admin';
import Cart from './pages/clientpages/Cart';
import Home from 'pages/clientpages/Home';
import Dashboard from 'pages/adminpage/home/Home';
import Login from './pages/clientpages/Login';
import Product from './pages/clientpages/Product';
import ProductList from './pages/clientpages/ProductList';
import AdminProductList from './pages/adminpage/products/ProductList';
import AdminProduct from './pages/adminpage/product/Product';
import Register from './pages/clientpages/Register';
import { Routes, Route } from 'react-router-dom';
import Layout from './pages/clientpages/Layout';
import AuthLayout from './pages/clientpages/AuthLayout';
import UserList from './pages/adminpage/userList/UserList';
import User from 'pages/adminpage/user/User';
import NewUser from 'pages/adminpage/newUser/NewUser';
import NewProduct from 'pages/adminpage/newProduct/NewProduct';

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className='client'>
          <Layout />
        </div>}
      >
        <Route index element={<Home />} />
        <Route path="cart" element={<Cart />} />
        <Route path="product" element={<Product />} />
        <Route path="products" element={<ProductList />} />
      </Route>
      <Route path="/auth" element={
        <div className='client'>
          <AuthLayout />
        </div>}
      >
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
      <Route path="admin" element={
        <div className='admin'>
          <Admin />
        </div>}
      >
        <Route index element={<Dashboard />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="users" element={<UserList />} />
        <Route path="user/:userId" element={<User /> } />
        <Route path="newuser" element={<NewUser /> } />
        <Route path="products" element={<AdminProductList /> } />
        <Route path="product/:productId" element={<AdminProduct /> } />
        <Route path="newproduct" element={<NewProduct /> } />
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;
