import React from 'react'
import { PRODUCTS } from '../../Products';
import Product from '../../Product';
import Category from '../../layouts/Category';
import { Link } from 'react-router-dom';

const Women = () => {

    const WomenProduct = PRODUCTS.filter((product) => product.category === "Women's shoe");

    return (
        <>
            <div className="container-fluid ms-4">
                <div className="row">
                    <div className="col-md-3">
                        <Category Category="Women's shoes (5)" />
                    </div>

                    <div className="col-md-9">
                        <div className="row">
                            {WomenProduct.map((product) => (

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

export default Women