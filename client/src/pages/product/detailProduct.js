import React from 'react';
import Navbar from "../../components/navbar";
import Detail from "../../components/product/detail";
import {useParams} from "react-router-dom";

function DetailProduct() {
    let { id } = useParams();
    return (
        <div>
            <Navbar/>
            <Detail id={id}/>
        </div>
    );
}

export default DetailProduct;
