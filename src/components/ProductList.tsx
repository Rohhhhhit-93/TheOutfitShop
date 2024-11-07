import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Card, CardTitle, Col, Container, Row } from 'react-bootstrap';


export default function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post('https://ecom-shop-api.vercel.app/products', {
            store: "clothing"
        }).then(res => {
            setData(res.data.data)
            console.log(data)
        })
    }, [])
    return (
        <>
            <Container>
                <section id="products">
                    <h3>Products</h3>
                    <hr></hr>
                    <Row >
                        {
                            data.length ?
                                data.map((data: any) => (
                                    <Col md={4} key={data.id}>
                                        <Card className="productlist">
                                            <img className="productlist"
                                                alt='sample'
                                                src={data.image.original}
                                            />
                                            <Card.Body>
                                                <Card.Title>
                                                    {data.name}
                                                </Card.Title>
                                                <Card.Text>
                                                    {data.shop.thumbnail}
                                                </Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                                : null
                        }
                    </Row>
                </section>
            </Container>
        </>

    )
}
