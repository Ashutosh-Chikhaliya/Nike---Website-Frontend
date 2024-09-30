import { React, useState } from 'react'
import { Link } from 'react-router-dom';
import logo from "../../../src/Assests/nike-logo-2.png"
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


const Signup = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dob, setDob] = useState('');
    // const [gender, setGender] = useState('');

    const server = 'your_server_url';
    const toast = 'your_toast_function';

    const handleSubmit = async (e) => {
        e.preventDefault();

        axios
            .post(`${server}/user/create-user`, { firstname, lastname, email, password, dob })
            .then((res) => {
                toast.success(res.data.message);
                setFirstname("");
                setLastname("");
                setEmail("");
                setPassword("");
                setDob("");

            })
            .catch((error) => {
                toast.error(error.response.data.message);
            });
    };

    return (
        <>

            <div className="container">
                <div className="main row justify-content-center align-items-center vh-100">
                    <div className="col-md-4 ">
                        <div className="p-3 mb-5 rounded  align-items-center">
                            <div className="text-center">
                                <img className="logo mb-4" src={logo} alt="logo" />
                                <h4>BECAME A NIKE MEMBER</h4>
                            </div>

                            <div className="row mt-4">
                                <form onSubmit={handleSubmit} className="">
                                    <div className="mb-1 col-12 ">

                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            placeholder="First Name"
                                            autoComplete="Name"
                                            value={firstname}
                                            onChange={(e) => setFirstname(e.target.value)}
                                            required
                                        />

                                        <input
                                            type="text"
                                            className="form-control mb-3"
                                            placeholder="Last Name"
                                            autoComplete="Name"
                                            value={lastname}
                                            onChange={(e) => setLastname(e.target.value)}
                                            required
                                        />

                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email address"
                                            className="form-control mb-4"
                                            autoComplete="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            required
                                        />

                                        <input
                                            type="password"
                                            className="form-control mb-3"
                                            placeholder='Password'
                                            autoComplete="current-password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                            required
                                        />

                                        <input
                                            type="date"
                                            className="form-control mb-3"
                                            placeholder="Date Of Birth"
                                            autoComplete="Name"
                                            value={dob}
                                            onChange={(e) => setDob(e.target.value)}
                                        />

                                        {/* <input
                                            type="radio"
                                            placeholder='male'
                                            name="gender"
                                            id="male"
                                            value="male"
                                            checked={gender === 'male'}
                                            onChange={() => setGender('male')}
                                            className="form-check-input"
                                            required
                                        />

                                        <input
                                            type="radio"
                                            placeholder='female'
                                            name="gender"
                                            id="female"
                                            value="female"
                                            checked={gender === 'female'}
                                            onChange={() => setGender('female')}
                                            className="form-check-input"
                                            required
                                        /> */}



                                        <button type="submit" className="btn btn-dark w-100">
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                                <Link to="/forgot-pass"> forgot password ?</Link>
                                <span>Already have an account ?
                                    <Link to="/login">Sign in.</Link>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup;