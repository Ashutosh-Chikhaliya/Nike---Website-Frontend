import React from 'react'
import { useState } from 'react';
import { Col } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';

const Checkout = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [state, setState] = useState('');
    const [locality, setLocality] = useState('');
    const [dob, setDob] = useState('');
    const [country, setCountry] = useState('INDIA');


    const { cart } = useCart();
    const [quantities] = useState({});
    // Function to update the quantity for a specific product


    const total = cart.reduce((acc, item) => acc + item.price * (quantities[item.id] || 1), 0);
    const subtotal = cart.reduce((acc, item) => acc + item.price * (quantities[item.id] || 1), 0);


    return (
        <>
            <div>
                {/* left part  */}
                <div className="container ms-5">
                    <div className="main row justify-content-start align-items-start vh-100">
                        <div className="col-md-5 ">
                            <div className="p-3 mb-5 rounded  align-items-center">
                                <div className="text-start">
                                    <h4>CHECKOUT</h4>
                                </div>

                                <div className="row mt-4">
                                    <form className="">
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
                                                type="Address line 1"
                                                name="Address line 1"
                                                placeholder="Address line 1"
                                                className="form-control mb-4"
                                                autoComplete="add2"
                                                value={addressLine1}
                                                onChange={(e) => setAddressLine1(e.target.value)}
                                                required
                                            />

                                            <input
                                                type="Address line 2"
                                                name="Address line 2"
                                                placeholder="Address line 2"
                                                className="form-control mb-4"
                                                autoComplete="add1"
                                                value={addressLine2}
                                                onChange={(e) => setAddressLine2(e.target.value)}
                                                required
                                            />

                                            <input
                                                type="postalcode"
                                                className="form-control mb-3"
                                                placeholder='Postalcode'
                                                autoComplete="zipcode"
                                                value={zipcode}
                                                onChange={(e) => setZipcode(e.target.value)}
                                                required
                                            />

                                            <input
                                                type="locality"
                                                className="form-control mb-3"
                                                placeholder='Locality'
                                                autoComplete="locality"
                                                value={locality}
                                                onChange={(e) => setLocality(e.target.value)}
                                                required
                                            />
                                            <input
                                                type="state"
                                                className="form-control mb-3"
                                                placeholder='State/Territory'
                                                autoComplete="state"
                                                value={state}
                                                onChange={(e) => setState(e.target.value)}
                                                required
                                            />

                                            <input
                                                type="country"
                                                className="form-control mb-3"
                                                placeholder='Country'
                                                value={country}
                                                onChange={(e) => setCountry(e.target.value)}
                                                readOnly
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

                                            <button type="submit" className="btn btn-dark w-100">
                                                Place Order
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* right part */}
                        </div>
                        <Col md={4} className='ms-5'>
                            <h4 className="mb-3 mt-4 ">Summary</h4>
                            <p>
                                Total: <span className="text-right">₹{total}</span>
                            </p>
                            <div className="mb-2">
                                Estimated Delivery Fee : ₹ 1250
                            </div>
                            <hr className="my-2" />
                            <p>
                                Subtotal (including delivery):{' '}
                                <span className="text-right">₹{subtotal + 1250}</span>
                            </p>
                        </Col>
                    </div>
                </div>
            </div >
        </>
    )
}
export default Checkout
