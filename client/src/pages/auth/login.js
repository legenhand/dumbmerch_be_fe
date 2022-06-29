import React from 'react';
import LoginForm from "../../components/auth/loginForm";
import LoginregisterDetail from "../../components/auth/loginregisterDetail";
function Login() {
    return (
        <div className="container-fluid bg-black p-5" style={{height: '100vh'}}>
            <div className="row p-5">
                <div className="col-7">
                    <LoginregisterDetail/>
                </div>
                <div className="col m-auto">
                    <LoginForm/>
                </div>
            </div>
        </div>
    );
}

export default Login;