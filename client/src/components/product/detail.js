import React, { useContext} from 'react';
import {convertToRupiah} from "../../helper/helper";
import {useMutation, useQuery} from "react-query";
import {API} from "../../config/api";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/userContext";

function Detail(props) {
    const navigate = useNavigate();
   if (localStorage.token) {
            checkUser();
        } const id = props.id;
    const [state] = useContext(UserContext);
    let { data: product } = useQuery('productDetailCache', async () => {
   if (localStorage.token) {
            checkUser();
        }     const response = await API.get(`/product/${id}`);
        return response.data.data;
    });
    const handleBuy = useMutation(async () => {
        try {
            // Get data from product
            const data = {
                idProduct: product.id,
                idSeller: product.user.id,
                price: product.price,
                idBuyer: state.user.id,
                status: 'in progress'
            };

            // Configuration

            // Insert transaction data
            await API.post("/transaction", data);

            navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    });

    return (
        <div className="container-fluid bg-black" style={{
            height: "100%",
            minHeight: "88vh"
        }}>
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
                    <button type="button" className="btn btn-danger w-100 my-4" onClick={() => handleBuy.mutate()}>Buy</button>
                </div>
            </div>
        </div>
    );
}

export default Detail;