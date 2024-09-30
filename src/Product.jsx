import React from "react";


const Product = (props) => {
    const { productName, price, productImage, category } = props.data;

    return (
        <>

            <div className="col-md-9 mt-5 ">
                <div className="row">
                    <div className=" mt-2 ps-2" style={{ border: "none" }}>

                        <img src={productImage} alt="nike" className="product-image" />
                        <div className="pt-2">
                            <h6 className="card-title text-capitalize">{productName}</h6>
                            <p className="card-title fs-6 text-capitalize red" style={{ color: '#808082' }}>{category}</p>
                            <p className="card-text" style={{ color: '#808082' }}> 1 Color</p>
                            <h5 className="text-uppercase"> MRP : ₹ {price}.00</h5>
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;
