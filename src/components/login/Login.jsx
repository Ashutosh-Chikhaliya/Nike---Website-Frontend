import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../../../src/Assests/nike-logo-2.png"
import 'bootstrap/dist/css/bootstrap.css';
//import axios from 'axios';
//import { useAuth } from '../../context/auth';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        if (email.trim() === "" || password.trim() === "") {
            setLoginError(true);
        } else {
            setLoginError(false);
            alert("Logged in successfully !");
        }

        // const validEmail = 'user@example.com';
        // const validPassword = 'password123'; 
        // if (email === validEmail && password === validPassword) {
        //     alert('Login successful');
        // } else {
        //     alert('Login failed');
        // }

    };



    return (
        <>

            <div className="container">
                <div className="main row justify-content-center align-items-center vh-100">
                    <div className="col-md-4 ">
                        <div className="p-3 mb-5 rounded  align-items-center">
                            <div className="text-center">
                                <img className="logo mb-4" src={logo} alt="logo" />
                                <h4>YOUR ACCOUNT FOR <br /> EVERYTHING NIKE</h4>
                            </div>

                            <div className="row mt-4">
                                <form onSubmit={handleLogin} className="">
                                    <div className="mb-1 col-12 ">
                                        {loginError && <p className="auth-error-message"> please fill all fields correctly.</p>}
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email address"
                                            className="form-control mb-4"
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />

                                        <input
                                            type="password"
                                            className="form-control mb-3"
                                            placeholder='Password'
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />

                                        <button type="submit" className="btn btn-dark w-100">
                                            Login
                                        </button>
                                    </div>
                                </form>
                                <Link to="/forgot-pass"> forgot password ?</Link>
                                <span>Don't have account ?
                                    <Link to="/sign-up">Signup.</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
