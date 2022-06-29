import React, {useContext, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../context/userContext";
import {API} from "../../config/api";
import {Alert} from "react-bootstrap";
import {useMutation} from "react-query";

function LoginForm() {
    const [state, dispatch] = useContext(UserContext);
    const [message, setMessage] = useState(null);
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

    // Create function for handle insert data process with useMutation here ...
    const handleSubmit = useMutation(async (e) => {
        try {
            e.preventDefault();

            // Configuration Content-type
            const config = {
                headers: {
                    'Content-type': 'application/json',
                },
            };

            // Data body => Convert Object to String
            // Insert data user to database

            const body = JSON.stringify(data);
            const response = await API.post('/login', body, config);

            // Handling response here
            const userStatus = response.data.data.status

            dispatch({
                type: 'LOGIN_SUCCESS',
                payload: response.data.data
            })

            if(userStatus == 'customer'){
                navigate('/')
            } else if(userStatus == 'admin' ){
                navigate('/complain-admin')
            }


            setMessage(null);
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    {error.response.data.message}
                </Alert>
            );
            setMessage(alert);
            console.log(error.response.data.message);
        }
    });


    return (
        <div className="container-fluid bg-grey w-75 rounded-3 px-4">
            <h3 className="text-white py-4">Login</h3>
            {message && message}
            <form onSubmit={(e) => handleSubmit.mutate(e)}>
                <input type="Email" className="form-control my-3 bg-dark text-white" placeholder="Email" onChange={handleChange} name="email"/>
                <input type="password" className="form-control my-3 bg-dark text-white" placeholder="Password" onChange={handleChange} name="password"/>
                <button type="submit" className="btn btn-danger w-100 my-4">Login</button>
            </form>
        </div>
    );
}

export default LoginForm;