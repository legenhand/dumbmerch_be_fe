
import {Route, Routes, useNavigate} from "react-router-dom";
import CategoryList from "./pages/category/categoryList";
import ProductList from "./pages/product/productList";
import Complain from "./pages/complain/complain";
import Profile from "./pages/profile/profile";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import DetailProduct from "./pages/product/detailProduct";
import EditProduct from "./pages/product/editProduct";
import EditCategory from "./pages/category/editCategory";
import DetailTransaction from "./pages/transaction/detailTransaction";
import React, {useContext, useEffect} from "react";
import Index from "./components";
import { API, setAuthToken } from './config/api';
import {UserContext} from "./context/userContext";
import AddCategory from "./pages/category/addCategory";
import AddProduct from "./pages/product/addProduct";
import AdminComplain from "./pages/complain/admincomplain";



function App() {
    let navigate = useNavigate();
    const [state, dispatch] = useContext(UserContext);
    // Init token on axios every time the app is refreshed here ...
    useEffect(() => {
        if (localStorage.token) {
            setAuthToken(localStorage.token);
        }

        // Redirect Auth
        if (state.isLogin === false) {
            navigate('/login');
        } else {
            if (state.user.status === 'admin') {
                navigate('/product');
            } else if (state.user.status === 'customer') {
                navigate('/');
            }
        }
    }, [state]);

    const checkUser = async () => {
        try {
            const response = await API.get('/check-auth');

            // If the token incorrect
            if (response.status === 404) {
                return dispatch({
                    type: 'AUTH_ERROR',
                });
            }
            // Get user data
            let payload = response.data.data.user;
            // Get token from local storage
            payload.token = localStorage.token;

            // Send data to useContext
            dispatch({
                type: 'USER_SUCCESS',
                payload,
            });
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (localStorage.token) {
            checkUser();
        }
    }, []);

    return (
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="category" element={<CategoryList />} />
                <Route path="product" element={<ProductList />} />
                <Route path="complain" element={<Complain />} />
                <Route path="complain-admin" element={<AdminComplain />} />
                <Route path="profile" element={<Profile />} />
                <Route path="login" element={<Login />} />
                <Route path="register" element={<Register />} />
                <Route path="detail/:id" element={<DetailProduct />} />
                <Route path="add_category" element={<AddCategory />} />
                <Route path="add_product" element={<AddProduct />} />
                <Route path="edit_product" element={<EditProduct />} />
                <Route path="edit_category" element={<EditCategory />} />
                <Route path="edit_category/:id" element={<EditCategory />} />
                <Route path="edit_product/:id" element={<EditProduct />} />
                <Route path="detail_transaction/:id" element={<DetailTransaction />} />
            </Routes>
  );
}

export default App;
