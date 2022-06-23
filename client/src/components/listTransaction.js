import React from 'react';
import logo from '../assets/logo.png';
import {dataTransaction} from "../dummydata/dummydata";
import {convertToRupiah} from "../helper/helper";
import {Link} from "react-router-dom";

function ListTransaction(props) {
    return (
        <div className="container-fluid">
            {dataTransaction.map((data,index) => <div className="row bg-grey my-2" style={{height: '22vh'}}>
                    <div className="col" key={index}>
                        <div className="d-flex flex-row">
                            <div className="my-auto me-3">
                                <img src={data.image} alt="" height="100px" width="100px"/>
                            </div>
                            <div className="d-flex flex-column me-auto my-2">
                                <Link to={'/detail_transaction/' + index} className="text-decoration-none"><span className="text-primary fs-5 ">{data.name}</span></Link>

                                <span className="text-primary">{data.date}</span>
                                <span className="text-white">Price : {convertToRupiah(data.price)}</span> <br/>
                                <span className="text-white fw-bolder">Sub Total : {convertToRupiah(data.price * data.qty)}</span>
                            </div>
                            <div className="d-flex me-2">
                                <img src={logo} alt="" height="100px" className="my-auto"/>
                            </div>
                        </div>
                    </div>
                </div>
            )}

        </div>
    );
}

export default ListTransaction;