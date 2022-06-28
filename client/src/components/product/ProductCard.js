import React from 'react';
import {convertToRupiah} from "../../helper/helper";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import {API} from "../../config/api";
function ProductCard(props) {

    let { data: products, refetch } = useQuery('productsCache', async () => {
        const response = await API.get('/products');
        return response.data.data;
    });

    return (
        products?.map((data, index) =>
            <div className="col mb-3" key={index}>
                <div className="bg-grey p-0 m-0 rounded-3">
                    <img src={data.image} alt="" width="100%" height="150vh" className="rounded-top"/>
                    <div className="p-3">
                        <Link to={"/detail/" + data.id} className="text-decoration-none"><h4 className="text-primary">{data.name}</h4></Link>

                        <span className="text-white">{convertToRupiah(data.price)}</span><br/>
                        <span className="text-white">Stock : {data.qty}</span>
                    </div>
                </div>
            </div>
        )
    );
}

export default ProductCard;