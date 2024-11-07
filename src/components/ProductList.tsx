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
            <Row>
                
                {
                data.length ?
                data.map((data: any) => (
                <Col md={4} key={data.id}>
                <Card>
                <img
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
        </Container>
        </>
        
    )
}
