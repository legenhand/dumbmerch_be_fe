import React from 'react';
import Navbar from "../components/navbar";
import {Link, useParams} from "react-router-dom";
import {convertToRupiah} from "../helper/helper";
import {dataTransaction} from "../dummydata/dummydata";
import logo from "../assets/logo.png";

function DetailTransaction(props) {
    const {id} = useParams();
    const data = dataTransaction[id];
    return (
        <div>
            <Navbar/>
            <div className="container-fluid bg-black p-5" style={{height: '88vh'}}>
                <h3 className="text-primary center">Detail Transaction</h3>
                <h4 className="text-white">Status Transaction : Dalam Perjalanan</h4>
                <h6 className="text-white">No Resi : JT8570924929</h6>
                <h6 className="text-white">Ekspedisi : J&T Express</h6>
                <table className="table w-100 table-dark table-striped table-hover text-center">
                    <thead className="">
                        <th>Date</th>
                        <th>Status</th>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                24 May 2022 23:58:41
                            </td>
                            <td>
                                Telah Berangkat: Pusat Transit, JAKARTA
                            </td>
                        </tr>
                    <tr>
                        <td>
                            24 May 2022 21:34:55
                        </td>
                        <td>
                            Telah Tiba: Pusat Transit, JAKARTA
                        </td>
                    </tr>
                    </tbody>
                </table>
                <h4 className="text-white">Detail Produk : </h4>
                <div className="d-flex flex-row bg-grey px-3">
                    <div className="my-auto me-3">
                        <img src={data.image} alt="" height="100px" width="100px"/>
                    </div>
                    <div className="d-flex flex-column me-auto my-2">
                        <span className="text-primary fs-5 ">{data.name}</span>

                        <span className="text-primary">{data.date}</span>
                        <span className="text-white">Price : {convertToRupiah(data.price)}</span>
                        <span className="text-white">Qty : {data.qty}</span>
                        <br/>
                        <span className="text-white fw-bolder">Sub Total : {convertToRupiah(data.price * data.qty)}</span>
                    </div>
                    <div className="d-flex me-2">
                        <img src={logo} alt="" height="100px" className="my-auto"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailTransaction;