import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Card, CardSubtitle, CardTitle, Col, Container, Row } from 'react-bootstrap';


export default function ProductList() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post('https://ecom-shop-api.vercel.app/products', {
            store : "clothing"
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
                                                    {data.categories.name}
                                                </Card.Title>
                                                <Card.Title>
                                                    {data.name}
                                                </Card.Title>
                                                <Card.Text>
                                                    ${data.max_price}
                                                </Card.Text>
                                                <Card.Text>
                                                   stock : {data.in_stock}
                                                </Card.Text>
                                                <Card.Text>
                                                   s
                                                </Card.Text>
                                                <Card.Subtitle>
                                                    {data.description}
                                                </Card.Subtitle>
                                                <br></br>
                                                <Button>BUY</Button>
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
