import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from 'react-router-dom';
import logo from "../Assests/nike-logo-2.png"
import Header from './Header';


const Navbar = () => {
    return (

        <>
            <Header />
            <nav className="navbar navbar-expand-lg bg-white" style={{ width: "100%" }}>
                <div className="container">
                    {/* Logo */}
                    <Link to="/home" className="navbar-brand ">
                        <img className="nike-logo" src={logo} alt="Nike Logo" width={"58px"} height={"20px"} />
                    </Link>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    {/* Navigation Menu */}
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <Link to="/men" className="nav-link">
                                    Men
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/women" className="nav-link"    >
                                    Women
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/kids" className="nav-link" href="#">
                                    Kids
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className=" collapse navbar-collapse justify-content-end">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/wishlist" className="nav-link" href="#">
                                    Wishlist
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/cart" className="nav-link" href="#">
                                    Cart
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >

        </>
    )
}

export default Navbar
