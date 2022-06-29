import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import { useMutation } from 'react-query';
import { API } from '../../config/api';
import {Alert} from "react-bootstrap";

function RegisterForm() {
    const initialValues = {
        name: '',
        email : '',
        password : '',
    }
    const [message, setMessage] = useState(null);
    const [data, setData] = useState(initialValues);
    function handleChange(event) {
        const {name, value} = event.target;
        setData({
            ...data,
            [name]: value,
        });
    }
    const navigate = useNavigate()

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
            const body = JSON.stringify(data);

            // Insert data user to database
            await API.post('/register', body, config);

            // Handling response here
            navigate("../login", { replace: true })
        } catch (error) {
            const alert = (
                <Alert variant="danger" className="py-1">
                    Failed
                </Alert>
            );
            setMessage(alert);
            console.log(error);
            navigate("../register", { replace: true })
        }
    });
    return (
        <div className="container-fluid bg-grey w-75 rounded-3 px-4">
            <h3 className="text-white py-4">Register</h3>
            {message && message}
            <form onSubmit={(e) => handleSubmit.mutate(e)}>
                <input type="text" className="form-control my-3 bg-dark text-white" placeholder="Name" onChange={handleChange} name="name"/>
                <input type="Email" className="form-control my-3 bg-dark text-white" placeholder="Email" onChange={handleChange} name="email"/>
                <input type="password" className="form-control my-3 bg-dark text-white" placeholder="Password" onChange={handleChange} name="password"/>
                <button type="submit" className="btn btn-danger w-100 my-4">Register</button>
            </form>
        </div>
    );
}

export default RegisterForm;