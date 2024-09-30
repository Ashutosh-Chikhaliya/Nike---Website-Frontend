import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Card, Form } from 'react-bootstrap';
import { useCart } from '../../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart } = useCart();
    const [quantities, setQuantities] = useState({});

    // Function to update the quantity for a specific product
    const updateQuantity = (productId, newQuantity) => {
        setQuantities({ ...quantities, [productId]: newQuantity });
    };

    const total = cart.reduce((acc, item) => acc + item.price * (quantities[item.id] || 1), 0);
    const subtotal = cart.reduce((acc, item) => acc + item.price * (quantities[item.id] || 1), 0);


    return (
        <Container>
            <h2 className="my-4">Bag</h2>
            {cart.length === 0 ? (
                <div style={{ fontSize: '20px' }}>There are no items in your bag.</div>
            ) : (
                <Row>
                    <Col md={8}>
                        {cart.map((product) => (
                            <Card key={product.id} className="mb-3 product-card">
                                <Row>
                                    <Col md={4}>
                                        <Image src={product.productImage} alt={product.productName} fluid style={{ width: '250px', height: '250px' }} />
                                    </Col>
                                    <Col md={8}>
                                        <Card.Body className="product-details">
                                            <Card.Title>{product.productName}</Card.Title>
                                            <Row>
                                                <Col md={6}>
                                                    <Card.Text>Price:</Card.Text>
                                                </Col>
                                                <Col md={6} className="text-right">
                                                    <Card.Text>₹{product.price}</Card.Text>
                                                </Col>
                                            </Row>
                                            <Row>
                                                <Col md={6}>
                                                    <Card.Text>Quantity: </Card.Text>
                                                </Col>
                                                <Col md={6} className="text-right">
                                                    <Form.Control
                                                        className="form-control-sm"
                                                        type="number"
                                                        value={quantities[product.id] || 1}
                                                        onChange={(e) => {
                                                            const newQuantity = parseInt(e.target.value, 10);
                                                            updateQuantity(product.id, newQuantity);
                                                        }}
                                                    />
                                                </Col>
                                            </Row>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        ))}
                    </Col>

                    <Col md={4}>
                        <h4 className="mb-3">Summary</h4>
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
                        <div className="d-flex flex-column">
                            <Button
                                className="mb-2"
                                variant="dark"
                                size="lg"
                                block
                                style={{ borderRadius: '50px', height: '58px' }}
                            >
                                <Link to="/login" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Login to Checkout
                                </Link>
                            </Button>

                            <Button
                                variant="dark"
                                size="lg"
                                block
                                style={{ borderRadius: '50px', height: '58px' }}
                            >
                                <Link to="/checkout" style={{ textDecoration: 'none', color: 'inherit' }}>
                                    Checkout as guest
                                </Link>
                            </Button>
                        </div>
                    </Col>
                </Row>
            )}
        </Container>
    );
};

export default Cart;
