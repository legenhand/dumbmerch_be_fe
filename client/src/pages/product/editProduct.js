import React from 'react';
import Navbar from "../../components/navbar";
import EditFormProduct from "../../components/product/editFormProduct";
import {useParams} from "react-router-dom";

function EditProduct() {
    let {id} = useParams();
    return (
        <div>
            <Navbar/>
            <div className="container-fluid bg-black p-5 text-white" style={{height: '88vh'}}>
                <h4>Edit Product</h4>
                <EditFormProduct id={id}/>
            </div>
        </div>
    );
}

export default EditProduct;