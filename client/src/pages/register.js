import React from 'react';
import LoginregisterDetail from "../components/loginregisterDetail";
import RegisterForm from "../components/registerForm";

function Register(props) {
    return (
        <div className="container-fluid bg-black p-5" style={{height: '100vh'}}>
            <div className="row p-5">
                <div className="col-7">
                    <LoginregisterDetail/>
                </div>
                <div className="col m-auto">
                    <RegisterForm/>
                </div>
            </div>
        </div>
    );
}

export default Register;