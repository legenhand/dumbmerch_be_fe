import React from 'react';
import Navbar from "../../components/navbar";
import AddFormProduct from "../../components/product/addFormProduct";

function AddProduct() {
    return (
        <div>
            <Navbar/>
            <div className="container-fluid bg-black p-5 text-white" style={{height: '88vh'}}>
                <h4>Add Product</h4>
                <AddFormProduct/>
            </div>
        </div>
    );
}

export default AddProduct;