import React from 'react';
import Navbar from "../components/navbar";
import TableProduct from "../components/tableProduct";

function ProductList(props) {
    return (
        <div>
            <Navbar/>
            <TableProduct/>
        </div>
    );
}

export default ProductList;