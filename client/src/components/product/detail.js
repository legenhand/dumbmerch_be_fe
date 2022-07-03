import React, {useContext, useEffect} from 'react';
import {convertToRupiah} from "../../helper/helper";
import {useMutation, useQuery} from "react-query";
import {API} from "../../config/api";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/userContext";

function Detail(props) {
    const navigate = useNavigate();
    const id = props.id;
    const [state] = useContext(UserContext);
    let { data: product } = useQuery('productDetailCache', async () => {
    const response = await API.get(`/product/${id}`);
        return response.data.data;
    });
    const handleBuy = useMutation(async () => {
        try {
            // Get data from product
            const data = {
                idProduct: product.id,
                idSeller: product.user.id,
                price: product.price,
            };

            // Data body
            const body = JSON.stringify(data);
            console.log(body);
            // Configuration
            const config = {
                method: "POST",
                headers: {
                    Authorization: "Basic " + localStorage.token,
                    "Content-type": "application/json",
                },
            };

            // Insert transaction data
            const response = await API.post("/transaction", body, config);
            console.log(response);
            // Create variabel for store token payment from response here ...
            const token = response.data.payment.token;

            // Init Snap for display payment page with token here ...
            window.snap.pay(token,{
                onSuccess: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/profile");
                },
                onPending: function (result) {
                    /* You may add your own implementation here */
                    console.log(result);
                    navigate("/profile");
                },
                onError: function (result) {
                    /* You may add your own implementation here */
                    navigate(result);
                },
                onClose: function () {
                    /* You may add your own implementation here */
                    alert("you closed the popup without finishing the payment");
                },
            })
        } catch (error) {
            console.log(error);
        }
    });

    useEffect(() => {
        //change this to the script source you want to load, for example this is snap.js sandbox env
        const midtransScriptUrl = "https://app.sandbox.midtrans.com/snap/snap.js";
        //change this according to your client-key
        const myMidtransClientKey = "SB-Mid-client-LQsMqwYk9hPkOoEx";

        let scriptTag = document.createElement("script");
        scriptTag.src = midtransScriptUrl;
        // optional if you want to set script attribute
        // for example snap.js have data-client-key attribute
        scriptTag.setAttribute("data-client-key", myMidtransClientKey);

        document.body.appendChild(scriptTag);
        return () => {
            document.body.removeChild(scriptTag);
        };
    }, []);

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