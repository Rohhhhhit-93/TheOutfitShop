import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Badge, Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";

export default function ProductList() {
    const [data, setData] = useState<any[]>([]);
    const [wishlist, setWishlist] = useState<any[]>(() => {
        const savedWishlist = localStorage.getItem('wishlist');
        return savedWishlist ? JSON.parse(savedWishlist) : [];
    });

    useEffect(() => {
        axios.post('https://ecom-shop-api.vercel.app/products', {
            store: "clothing"
        }).then(res => {
            setData(res.data.data);
            console.log(res.data.data);  // Log the fetched products
        }).catch((error) => {
            console.error('Error fetching products:', error);
        });
    }, []);

    // Function to add a product to the wishlist
    const addToWishlist = (product: { id: number; name: string; price: number; image: string }) => {
        console.log('Adding product to wishlist:', product);
        // Avoid duplicates in the wishlist
        if (!wishlist.some((item) => item.id === product.id)) {
            const newWishlist = [...wishlist, product];
            setWishlist(newWishlist);
            localStorage.setItem('wishlist', JSON.stringify(newWishlist)); // Persist to localStorage
        }
    };

    return (
        <>
            <Container>
                <section id="products">
                    <h3>Products</h3>
                    <hr />
                    <Row>
                        {
                            data.length ? data.map((product: any) => (
                                <Col md={4} key={product.id}>
                                    <Card className="productlist">
                                        <img className="productlist" alt={product.name} src={product.image.original} />
                                        <Card.Body>
                                            <Card.Title>{product.categories.name}</Card.Title>
                                            <Card.Title>{product.name}</Card.Title>
                                            <Card.Text>${product.max_price}</Card.Text>
                                            {/* <Badge pill variant="warning">Sale</Badge> */}
                                            <Card.Text>Total Review: ★★★★☆</Card.Text>
                                            <Card.Subtitle>{product.description}</Card.Subtitle>
                                            <br />
                                            <Link to={`/products/${product.slug}`}>
                                                <Button className="button-grp black-button">Buy Now</Button>
                                            </Link>
                                            <Link to={`/wishlist/${product.slug}`}>
                                                {/* <button onClick={() => addToWishlist(product)}> */}
                                                    <FaRegHeart onClick={() => addToWishlist(product)} className="heart-icon" /> 
                                                {/* </button> */}
                                            </Link >

                                        </Card.Body>
                                    </Card>
                                </Col>
                            )) : 'Loading products...'
                        }
                    </Row>
                </section>
            </Container>
        </>
    );
}
