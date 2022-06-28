import React, {useState, useContext, useEffect} from 'react';
import logo from '../../assets/logo.png';
import {convertToRupiah} from "../../helper/helper";
import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import {API} from "../../config/api";
import {UserContext} from "../../context/userContext";

function ListTransaction(props) {
    const [state, dispatch] = useContext(UserContext);
    const id = state.user.id;
    const [transactions, setTransactions] = useState(null);
    let { data: transaction } = useQuery('transactionAllCache', async () => {
        const response = await API.get(`/transaction/${id}`);
        return response.data.data;
    });

    useEffect(() => {
        if (transaction) {
            setTransactions(transaction);
        }
    }, [transaction]);

    return (
        <div className="container-fluid">
            {transactions?.map((data,index) => <div className="row bg-grey my-2" style={{height: '22vh'}}>
                    <div className="col" key={index}>
                        <div className="d-flex flex-row">
                            <div className="my-auto me-3">
                                <img src={data?.image} alt="" height="100px" width="100px"/>
                            </div>
                            <div className="d-flex flex-column me-auto my-2">
                                <Link to={'/detail_transaction/' + data?.id} className="text-decoration-none"><span className="text-primary fs-5 ">{data?.product?.name}</span></Link>

                                <span className="text-primary">{data.createdAt}</span>
                                <span className="text-white">Price : {convertToRupiah(data.price)}</span> <br/>
                                <span className="text-white fw-bolder">Sub Total : {convertToRupiah(data.price)}</span>
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