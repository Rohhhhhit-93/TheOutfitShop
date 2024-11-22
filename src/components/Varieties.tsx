import React, { useState, useEffect } from 'react';
import { Card, Container, Col } from 'react-bootstrap';
import axios from 'axios';
import Slider, { CustomArrowProps } from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function Categories() {
    const [data, setProducts] = useState([]);

    const categoryImages: Record<string, string> = {
        "women-dress": "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTpA0hNPZ9Xysji9xM4LQrXQYWvdmRjp4kRaHupDE0wq_rFYbH7Ojc2KY-UObanRBkAqPiBoF36XfXlNKQG9q2gM-JMcaO7o9G4aJGg14JmW0qgokbWANG7mv0",
        "outer-wear": "https://m.media-amazon.com/images/I/51XWUBbfe7L._AC_UL480_QL65_.jpg",
        "pants": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSClRoKrMGC49bfTK9KJD86KddzSEsy4p2Isw&s",
        "tops": "https://media.istockphoto.com/id/1402598773/photo/flatlay-a-light-yellow-knitwear-crop-top-portrait-photo-creates-a-fresh-look-its-use-as-a.jpg?s=612x612&w=0&k=20&c=loj2MV63qfcFgtJnpFqNQjLzcWLD2VVDLzRKH56RHeA=",
        "skirts": "https://media.istockphoto.com/id/882157056/photo/red-elegant-skirt-with-ribbon-bow-isolated-on-white.jpg?s=612x612&w=0&k=20&c=7zbb86_FfPxrNedcagZyyHrcpKGu2Si4_LgNYHdTqiU=",
        "shirts": "https://www.alayacotton.in/cdn/shop/files/E12.jpg?v=1706249783&width=360",


    };

    useEffect(() => {
        axios.post('https://ecom-shop-api.vercel.app/categories', {
            store: "clothing",
        }).then(res => {
            setProducts(res.data.data);
        });
    }, []);

    // Custom Next Arrow
    const NextArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
        return (
            <div
                className="custom-arrow next-arrow"
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '50%',
                    right: '-25px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 2,
                    fontSize: '20px',
                    color: '#000',
                }}
            >
                &#8250;
            </div>
        );
    };

    // Custom Prev Arrow
    const PrevArrow: React.FC<CustomArrowProps> = ({ onClick }) => {
        return (
            <div
                className="custom-arrow prev-arrow"
                onClick={onClick}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '-25px',
                    transform: 'translateY(-50%)',
                    cursor: 'pointer',
                    zIndex: 2,
                    fontSize: '20px',
                    color: '#000',
                }}
            >
                &#8249;
            </div>
        );
    };

    // Slider settings
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: Math.min(6, data.length), // Default number of slides
        slidesToScroll: 3,
        nextArrow: <NextArrow />, // Pass custom NextArrow
        prevArrow: <PrevArrow />, // Pass custom PrevArrow
        responsive: [
            {
                breakpoint: 1024, // Screen width <= 1024px
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 768, // Screen width <= 768px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 480, // Screen width <= 480px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 600, // Screen width <= 480px
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
        ],
    };

    return (
        <Container>
            <section id='categories'>
                <h3>Featured Categories</h3>
                <div className="slider-container" style={{ position: 'relative' }}>
                    <Slider {...settings}>
                        {data.length ? (
                            data.map((item: any) => (
                                <Col xs={5} key={item.id}>
                                    <Card
                                        style={{
                                            height: '190px',
                                            width: '160px',
                                            margin: '0',
                                            display: "flex",
                                            // flexDirection: "column",
                                            alignItems: "center",
                                            // justifyContent: "center",
                                            // objectFit:"cover"
                                        }}
                                        className="pop"
                                    >
                                        <Card.Img
                                            src={categoryImages[item.slug] || "/images/default.jpg"}
                                            alt={item.slug}
                                            style={{
                                                paddingTop: '20px',
                                                objectFit: "contain",
                                                width: "50%",
                                                height: "60%",
                                                // marginTop: "20px",
                                            }}
                                        />
                                        <Card.Body >
                                            <Card.Text className="catt" style={{ paddingTop: '0.01rem' }}>{item.slug}</Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        ) : (
                            <p>Loading...</p>
                        )}
                    </Slider>
                </div>
                <hr></hr>
            </section>
        </Container>
    );
}

export default Categories;
