import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { SlClock } from "react-icons/sl";
import { IoGiftOutline } from "react-icons/io5";
import { FiPackage } from "react-icons/fi";
import { LuRefreshCcw } from "react-icons/lu";





export default function Footer() {
    return (
        <div>
            <Container >
                <section id='about'>
                    <h3>
                        About Us
                    </h3>
                    <hr></hr>
                    <Row xs="2">
                        <Col>
                            <SlClock className="footer-icons" />

                            <hr></hr>
                            <h5>Best Collections For All</h5>
                            <p>All sizes available for men , women and kids with updated collections for all with a wide variety of  designs.</p>
                        </Col>
                        <Col >
                            <IoGiftOutline className="footer-icons" />

                            <hr></hr>
                            <h5>Offers And Discount</h5>
                            <p>cheaper prices than your local clothing store , great cashback offers  to top it off.</p>
                        </Col>
                        <Col >
                            <FiPackage className="footer-icons" />

                            <hr></hr>
                            <h5>World Wide Delivery</h5>
                            <p>choose from a 5000+ products across a wide variety of clothes , footwear , accessories , etc and we delivery to you at your doorstep.</p>
                        </Col>
                        <Col >
                            <LuRefreshCcw className="footer-icons" />

                            <hr></hr>
                            <h5>Easy Returns</h5>
                            <p>Not satisfied with the product?!?! easy return helps you to get refund or replacement of the particular product. </p>
                        </Col>
                    </Row>
                </section>
                </Container>
        </div>
    )
}
