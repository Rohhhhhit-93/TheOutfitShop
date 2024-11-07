import axios from "axios";
import React, { Component, useEffect, useState } from "react";
import { Button, Card, Container } from "react-bootstrap";
import Slider from "react-slick";
import { banner } from "../assets";

function FocusOnSelect() {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.post('https://ecom-shop-api.vercel.app/categories', {
            store: "clothing"
        }).then(res => {
            setData(res.data.data)
            console.log(data)
        })
    }, [])
    const settings = {
        focusOnSelect: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500
    };
    return (
        <div className="slider-container">
        <>
            <Container>
                <h3>FAST SELLING</h3>

                <Slider {...settings} >

                    {
                        data.length ?
                            data.map((data: any) => (
                                <div>
                                    <div className="banner-slide">
                                        <Card
                                            style={{
                                                width: '18rem'
                                            }}
                                        >
                                            <img style={{ backgroundImage: `url(${banner.category})` }} className="banner-slide"></img>
                                            
                                            <Card.Body>
                                                <Card.Title >
                                                    {data.name}
                                                </Card.Title>
                                                <Card.Subtitle className="mb-2 text-muted">
                                                    {data.type.slug}
                                                </Card.Subtitle>
                                                <Card.Text>
                                                    {data.null}
                                                </Card.Text>
                                                <Button>
                                                    Buy Now
                                                </Button>
                                            </Card.Body>
                                        </Card>
                                    </div>
                                </div>
                            ))
                            : null
                    }
                </Slider>
            </Container>
        </>

         </div>
    );
}

export default FocusOnSelect;
