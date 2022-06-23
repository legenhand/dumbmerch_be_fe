import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './styles.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import CategoryList from "./pages/categoryList";
import ProductList from "./pages/productList";
import Complain from "./pages/complain";
import Profile from "./pages/profile";
import Login from "./pages/login";
import Register from "./pages/register";
import DetailProduct from "./pages/detailProduct";
import EditProduct from "./pages/editProduct";
import EditCategory from "./pages/editCategory";
import DetailTransaction from "./pages/detailTransaction";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path="category" element={<CategoryList />} />
              <Route path="product" element={<ProductList />} />
              <Route path="complain" element={<Complain />} />
              <Route path="profile" element={<Profile />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="detail/:id" element={<DetailProduct />} />
              <Route path="edit_product" element={<EditProduct />} />
              <Route path="edit_category" element={<EditCategory />} />
              <Route path="edit_category/:id" element={<EditCategory />} />
              <Route path="edit_product/:id" element={<EditProduct />} />
              <Route path="detail_transaction/:id" element={<DetailTransaction />} />
          </Routes>
      </BrowserRouter>
  </React.StrictMode>
);