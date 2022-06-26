import React, {useState} from 'react';
import {dataProduct} from "../../dummydata/dummydata";
import {convertToRupiah} from "../../helper/helper";
import {useQuery} from "react-query";
import {API} from "../../config/api";

function Detail(props) {
    const [data, setData] = useState(dataProduct);
    const id = props.id;
    let { data: product, refetch } = useQuery('productDetailCache', async () => {
        const response = await API.get(`/product/${id}`);
        return response.data.data;
    });

    return (
        <div className="container-fluid bg-black p-5" style={{height: '88vh'}}>
            <div className="row mx-5">
                <div className="col-5">
                    <img src={product?.image} alt="" height="500vh" width="400vw"/>
                </div>
                <div className="col">
                    <h3 className="text-primary">{product?.name}</h3>
                    <span className="text-white">Stock : {product?.qty}</span>
                    <p className="text-white my-4">
                        {product?.desc}
                    </p>
                    <h4 className="text-primary text-end">{convertToRupiah(product?.price)}</h4>
                    <button type="button" className="btn btn-danger w-100 my-4">Buy</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;