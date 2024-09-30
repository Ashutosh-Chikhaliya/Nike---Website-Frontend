import { React, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../../Products';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Button } from 'react-bootstrap';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import Notification from '../../styles/Notification';

const ProductsDetails = () => {

    const { wishlist } = useWishlist();
    const { cart } = useCart();
    const { productId } = useParams();
    const { addToWishlist } = useWishlist();
    const [showNotification, setShowNotification] = useState(false);
    const [notificationMessage, setNotificationMessage] = useState('');


    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to the top of the page
    }, []);

    const handleAddToWishlist = () => {
        if (wishlist.some((item) => item.id === product.id)) {
            setNotificationMessage('Already Added to Wishlist'); //  already in the wishlist
        } else {

            addToWishlist(product);
            setNotificationMessage('Product added to Wishlist');
        }
        setShowNotification(true); // Show the notification
    };

    const { addToCart } = useCart(); // Destructure the addToCart function from the CartContext

    const handleAddToCart = () => {
        if (cart.some((item) => item.id === product.id)) {
            setNotificationMessage('Already Added to cart'); // Already in the cart
        } else {
            addToCart(product); // Call the addToCart function to add the product to the cart
            setNotificationMessage('Product added to cart');
        }
        setShowNotification(true); // Show the notification
    };


    const handleCloseNotification = () => {
        setShowNotification(false); // Close the notification
    };

    const product = PRODUCTS.find((product) => product.id === parseInt(productId));
    //console.log("Available Sizes:", product.size);

    return (
        <>
            <div className="product-details-container">

                {/* Left part */}

                <div className="product-details-left p-5">
                    <div className="product">
                        {/* Main image slider on the right */}
                        <div className="main-image-slider">
                            <Carousel showThumbs={false}>
                                {product.images.map((image, index) => (
                                    <div key={index}>
                                        <img src={image} alt={`Product ${index + 1}`} style={{ width: "650px", height: "700px" }} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>
                </div>

                {/* Right part */}

                <div className="product-details-right p-5 mt-4">

                    <h3 className="product-name">{product.productName}</h3>
                    <h6 className="product-category">{product.category}</h6>
                    <p className="product-description">{product.description}</p>
                    <h5 className="product-mrp">MRP: {product.price}/-</h5>
                    <p>incl. of taxes<br></br>(Also includes all applicable duties)</p>


                    <div className="size-buttons mt-4">
                        <h5>Select Size</h5>
                        <form>
                            <div className="size-grid  mb-4 ">
                                {product.size ? (
                                    product.size.map((size, index) => (
                                        <div className="form-check" key={index}>
                                            <input
                                                className="form-check-input"
                                                type="radio"
                                                name="shoeSize"
                                                id={`size${size}`}
                                                value={size}
                                            />
                                            <label className="form-check-label" htmlFor={`size${size}`}>
                                                Size {size}
                                            </label>
                                        </div>
                                    ))
                                ) : (
                                    <p>No sizes available</p>
                                )}
                            </div>


                        </form>

                        <div className="d-flex flex-column mt-4 mx-auto ">

                            {showNotification && <Notification message={notificationMessage} onClose={handleCloseNotification} />}
                            <Button
                                className="mb-2 ms-4"
                                variant="dark"
                                size="lg"
                                style={{ borderRadius: '50px', height: '58px', width: '450px' }}
                                onClick={() => {
                                    handleAddToCart();
                                }}
                            >
                                ADD TO BAG
                            </Button>

                            <Button
                                className="mb-2 ms-4"
                                variant="outline-dark"
                                size="lg"
                                style={{ borderRadius: '50px', height: '58px', width: "450px" }}
                                onClick={handleAddToWishlist}
                            >
                                Favourite
                            </Button>
                        </div>
                    </div>

                    <div className="dropdown-button mt-5">
                        <div className="accordion">
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="sizeFitHeader">
                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#sizeFitCollapse"
                                        aria-expanded="true"
                                        aria-controls="sizeFitCollapse"
                                    >
                                        Size & Fit
                                    </button>
                                </h2>
                                <div
                                    id="sizeFitCollapse"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="sizeFitHeader"
                                >
                                    <div className="accordion-body">
                                        <ul>
                                            <li>
                                                Snug fit: we recommend ordering half a size up
                                            </li>
                                            <li>
                                                Size Guide
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="accordion-header" id="deliveryReturnsHeader">
                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#deliveryReturnsCollapse"
                                        aria-expanded="false"
                                        aria-controls="deliveryReturnsCollapse"
                                    >
                                        Delivery & Returns
                                    </button>
                                </h2>
                                <div
                                    id="deliveryReturnsCollapse"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="deliveryReturnsHeader"
                                >
                                    <div className="accordion-body">
                                        <p>All purchases are subject to delivery fees.</p>
                                        <ul>
                                            <li>
                                                Standard delivery 4-9 business days
                                            </li>
                                        </ul>
                                        <p>Orders are processed and delivered Monday-Friday (excluding public holidays).</p>
                                        <p>Nike Members enjoy free returns.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div >

        </>

    )
}

export default ProductsDetails
