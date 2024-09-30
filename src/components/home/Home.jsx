import { React } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import { PRODUCTS } from '../../Products';
import Product from "../../Product"
import OfferBar from "../../layouts/OfferBar";
import { Link } from "react-router-dom";


const Home = () => {

    const MenProduct = PRODUCTS.filter((product) => product.category === "Men's shoe");
    return (
        <>

            <OfferBar />
            <Carousel style={{}}>

                <Carousel.Item interval={1000}>
                    <img
                        className="slide d-block w-100"
                        src="https://images.unsplash.com/photo-1637666465047-8398e7d8038e?auto=format&fit=crop&q=60 &w=2700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkwfHxuaWtlfGVufDB8MHwwfHx8MA%3D%3D"
                        alt=""
                        style={{ height: "630px", width: "60px" }}

                    />
                    <Carousel.Caption>
                        <h3>Just - Do It</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, atque?
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        src="https://images.unsplash.com/photo-1548801133-da353ebb1d97?auto=format&fit=crop&q=60&w=2700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fG5pa2UlMjBneW18ZW58MHwwfDB8fHww"
                        className="slide d-block w-100 "
                        alt=""
                        style={{ height: "630px" }}
                    />
                    <Carousel.Caption>
                        <h3>New Arrival</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni assumenda doloremque sed!</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="slide d-block w-100"
                        src="https://images.unsplash.com/photo-1549298916-c6c5f85fa167?auto=format&fit=crop&q=60&w=2700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzB8fG5pa2V8ZW58MHwwfDB8fHwwS"
                        alt=""
                        style={{ height: "630px" }}
                    />
                    <Carousel.Caption>
                        <h3>Sneakers !!</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias porro rerum amet.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <h2 className="text-center mt-5">New Arrival</h2>
            <div className="mt-2 ms-5">


                <div className="row ms-5">
                    {MenProduct.map((product) => (

                        <div key={product.id} className="col-md-4 col-sm-6 col-12">
                            <Link to={`/product/${product.id}`} className='nav-link'>
                                <Product data={product} />
                            </Link>
                        </div>

                    ))}
                </div>
            </div>


        </>
    );
};

export default Home;