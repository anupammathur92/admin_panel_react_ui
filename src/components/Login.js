import React from 'react';
import { useNavigate } from "react-router-dom";
import { routeConstants } from '../routeConstants';

import logo from "../images/logo.svg";
import login from "../images/login.jpg";
function Login(){
    const navigate = useNavigate();

    const navigateToDashboard = () => {
        navigate(routeConstants.DASHBOARD);
    }

    return(
        <div className="login-page">
        <div className="login-box">
            <div className="contentBox">
                <div className="logo d-flex flex-wrap w-100">
                    <img src={logo} alt="logo"/>
                </div>
                <h1>Welcome to Project name!</h1>
                <p>Enter your email address and password to access admin panel.</p>
                <form className="mt-4" action="dashboard.html">
                    <div className="form-group">
                        <label>Email Address</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fal fa-envelope"></i></span>
                            </div>
                            <input type="text" className="form-control" placeholder="Email Address"/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password <a className="float-right" href="forgot.html">Forgot your password?</a></label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><i className="fal fa-lock"></i></span>
                            </div>
                            <input type="password" className="form-control" placeholder="Password"/>
                        </div>
                    </div>
                    <div className="form-group mb-0">
                        <button type="button" onClick={navigateToDashboard} className="btn w-100">Login</button>
                    </div>
                </form>
            </div>
            <div className="imgBox d-none d-md-block">
                <img src={login} alt="image"/>
            </div>
        </div>
    </div>
    )
}

export default Login;