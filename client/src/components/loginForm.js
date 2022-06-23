import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {dataProduct, statusLogin} from "../dummydata/dummydata";

function LoginForm(props) {
    const initialValues = {
        email : '',
        password : '',
    }

    const [data, setData] = useState(initialValues);
    function handleChange(event) {
        const {name, value} = event.target;
        setData({
            ...data,
            [name]: value,
        });
    }
    const navigate = useNavigate()
    async function handleClick(event) {
        console.log(data);
        statusLogin.status = true;
        event.preventDefault();
        navigate("../", { replace: true })
    }

    return (
        <div className="container-fluid bg-grey w-75 rounded-3 px-4">
            <h3 className="text-white py-4">Login</h3>
            <form action="">
                <input type="Email" className="form-control my-3 bg-dark text-white" placeholder="Email" onChange={handleChange} name="email"/>
                <input type="password" className="form-control my-3 bg-dark text-white" placeholder="Password" onChange={handleChange} name="password"/>
                <button type="button" className="btn btn-danger w-100 my-4" onClick={handleClick}>Login</button>
            </form>
        </div>
    );
}

export default LoginForm;