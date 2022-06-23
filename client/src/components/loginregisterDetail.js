import React from 'react';
import logo from "../assets/logo.png";
import {Link} from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginregisterDetail(props) {
    let navigate = useNavigate();
    async function handleNavigateLogin(event) {
        event.preventDefault();
        navigate("../login", { replace: true });
    }

    async function handleNavigateRegister(event) {
        event.preventDefault();
        navigate("../register", { replace: true });
    }

    return (
        <div>
            <Link to="/">
                <img src={logo} alt="" width="200vw"/>
            </Link>
            <h1 className="text-white mt-4">Easy, Fast and Reliable</h1>
            <p>Go shopping for merchandise, just go to dumb merch shopping. the biggest merchandise in <span
                className="fw-bolder">Indonesia</span></p>
            <div className="container p-0 pt-5">
                <button type="button" className="btn btn-danger px-5 me-4" onClick={handleNavigateLogin}>Login</button>
                <button type="button" className="btn px-5 text-white" onClick={handleNavigateRegister}>Register</button>
            </div>
        </div>
    );
}

export default LoginregisterDetail;