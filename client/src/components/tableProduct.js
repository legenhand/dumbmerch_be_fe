import React, {useState} from 'react';
import {dataProduct} from "../dummydata/dummydata";
import {Link} from "react-router-dom";
import {convertToRupiah} from "../helper/helper";

function TableProduct(props) {
    const [data, setData] = useState(dataProduct);
    let count = 0;

    function handleRemove(index){
        setData((prevState)=>{
            let items = [...prevState];
            items.splice(index, 1);
            return items;
        })
        dataProduct.splice(index,1);
    }
    return (
        <div className="container-fluid bg-black p-5" style={{
            height: "88vh"
        }}>
            <table className="table table-dark table-hover table-striped">
                <thead>
                    <tr>
                        <th>No</th>
                        <th className="text-truncate w-25">Photo</th>
                        <th>Product Name</th>
                        <th className="w-25">Product Desc</th>
                        <th>Price</th>
                        <th>Qty</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                {
                    data.map((data,index)=>{
                        count += 1;
                        return <tr key={index}>
                            <td>{count}</td>
                            <td>{data.image}</td>
                            <td>{data.name}</td>
                            <td>{data.desc}</td>
                            <td>{convertToRupiah(data.price)}</td>
                            <td>{data.stock}</td>
                            <td>
                                <Link to={"/edit_product/" + index}>
                                    <button type="button" className="btn btn-success w-50 bg-success me-3 my-2">
                                        Edit
                                    </button>
                                </Link>
                                <button type="button" className="btn btn-danger bg-danger w-50 my-2" onClick={() => handleRemove(index)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    );
}

export default TableProduct;