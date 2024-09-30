import React, { } from 'react'
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../Products';
import Product from '../../Product';
import Category from '../../layouts/Category';

const Men = () => {

    const MenProduct = PRODUCTS.filter((product) => product.category === "Men's shoe");



    return (
        <>
            <div className="container-fluid ms-4">
                <div className="row">
                    <div className="col-md-3">
                        <Category Category="Men's shoes (6)" />
                    </div>

                    <div className="col-md-9">
                        <div className="row">
                            {MenProduct.map((product) => (

                                <div key={product.id} className="col-md-4 col-sm-6 col-12">
                                    <Link to={`/product/${product.id}`} className='nav-link'>
                                        <Product data={product} />
                                    </Link>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Men