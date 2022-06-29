import React from 'react';
import Navbar from "../../components/navbar";
import { useParams} from "react-router-dom";
import logo from "../../assets/logo.png";
import {useEffect, useState} from "react";
import {useQuery} from "react-query";
import {API} from "../../config/api";

function DetailTransaction() {
    const {id} = useParams();
    const [transactions, setTransactions] = useState(null);
    let { data: transaction } = useQuery('transactiondetailCache', async () => {
        const response = await API.get(`/transaction/detail/${id}`);
        return response.data.data;
    });

    useEffect(() => {
        if (transaction) {
            setTransactions(transaction);
        }
    }, [transaction]);
    return (
        <div>
            <Navbar/>
            <div className="container-fluid bg-black p-5" style={{height: '88vh'}}>
                <h3 className="text-primary center">Detail Transaction</h3>
                <h4 className="text-white">Status Transaction :  {transactions?.status}</h4>
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
                        <img src={transactions?.image} alt="" height="100px" width="100px"/>
                    </div>
                    <div className="d-flex flex-column me-auto my-2">
                        <span className="text-primary fs-5 ">{transactions?.product?.name}</span>

                        <span className="text-primary">{transactions?.product?.desc}</span>
                        <span className="text-white">Price : {transactions?.price}</span>
                        {/*<span className="text-white">Qty : {}</span>*/}
                        <br/>
                        <span className="text-white fw-bolder">Sub Total : {transactions?.price}</span>
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