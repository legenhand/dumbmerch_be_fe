import React, {useState} from 'react';
import {dataProduct} from "../dummydata/dummydata";
import {convertToRupiah} from "../helper/helper";

function Detail(props) {
    const [data, setData] = useState(dataProduct);
    return (
        <div className="container-fluid bg-black p-5" style={{height: '88vh'}}>
            <div className="row mx-5">
                <div className="col-5">
                    <img src={data[props.id].image} alt="" height="500vh" width="400vw"/>
                </div>
                <div className="col">
                    <h3 className="text-primary">{data[props.id].name}</h3>
                    <span className="text-white">Stock : {data[props.id].stock}</span>
                    <p className="text-white my-4">
                        {data[props.id].desc}
                    </p>
                    <h4 className="text-primary text-end">{convertToRupiah(data[props.id].price)}</h4>
                    <button type="button" className="btn btn-danger w-100 my-4">Buy</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;