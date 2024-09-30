import React from 'react';
import { useWishlist } from '../../context/WishlistContext';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const { wishlist } = useWishlist();

    return (
        <div>
            <h3 className='ms-5 mt-3 mb-5'>Favourites</h3>

            <div className="container mt-1">
                <ul className="list-unstyled row">

                    {wishlist.map((product) => (
                        <li key={product.id} className="col-md-4 col-sm-6 col-12 mb-4">

                            <Link to={`/product/${product.id}`} className='nav-link'>

                                <div className="product-card">

                                    <img src={product.productImage} alt="nike" className="wishlistImg product-image" />
                                    <div className="mt-4">
                                        <h6 className="card-title fs-5 text-capitalize d-flex justify-content-between">
                                            {product.productName}
                                            <span className="text-uppercase fs-6">MRP: ₹{product.price}.00</span>
                                        </h6>
                                        <p className="card-title fs-6 text-capitalize red" style={{ color: '#808082' }}>{product.category}</p>
                                    </div>
                                </div>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
}

export default Wishlist;
