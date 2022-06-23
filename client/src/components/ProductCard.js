import React, {useState} from 'react';
import {convertToRupiah} from "../helper/helper";
import {dataProduct} from "../dummydata/dummydata";
import {Link} from "react-router-dom";
function ProductCard(props) {
    const [data, setData] = useState(dataProduct);
    return (
        data.map((data, index) =>
            <div className="col" key={index}>
                <div className="bg-grey p-0 m-0 rounded-3">
                    <img src={data.image} alt="" width="100%" height="200vh" className="rounded-top"/>
                    <div className="p-3">
                        <Link to={"/detail/" + index} className="text-decoration-none"><h4 className="text-primary">{data.name}</h4></Link>

                        <span className="text-white">{convertToRupiah(data.price)}</span><br/>
                        <span className="text-white">Stock : {data.stock}</span>
                    </div>
                </div>
            </div>
        )
    );
}

export default ProductCard;