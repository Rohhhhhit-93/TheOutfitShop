import React from 'react'
import { Badge, Button, Card, Col, Container, Figure, Image, Row } from 'react-bootstrap'
import { banner } from '../assets'

export default function Sale() {
    return (
        // <Container>
        //     <section id="sale">
        //     <h3>Sale</h3>
        //     <hr></hr>
        //     <Row xs="2">
        //         <Col className='offers-slide'>
        //         <div style={{ backgroundImage: `url(${banner.sale})` }} className="banner-slide-sale">
        //       <div className="col-md-4">
        //       <Badge bg="success">Get Upto 30% off On Your First Order!!</Badge>
        //         <h1>Flannels & checks (unisex)<span className="text-danger"> Starting From $100</span></h1>
        //         {/* <p>Free Shipping to first time customers only , after promotions and discount are applied.</p> */}
        //         <Button variant="secondary">Shop Now</Button>
        //       </div>
        //     </div>
        //         </Col>
        //         <Col className='offers-slide'>
        //         <div style={{ backgroundImage: `url(${banner.sale2})` }} className="banner-slide-sale">
        //       <div className="col-md-4">
        //       <Badge bg="success">Get Upto 15% off On Your First Order!!</Badge>
        //         <h1>Solid Shirts For Men <span className="text-danger"> Starting From $80</span></h1>
        //         {/* <p>Free Shipping to first time customers only , after promotions and discount are applied.</p> */}
        //         <Button variant="secondary">Shop Now</Button>
        //       </div>
        //     </div>
        //         </Col>

        //     </Row>
        //     </section>
            
            
        //     {/* <div className='offers-slide'>
        //         <Figure>
        //             <Figure.Image
        //                 width={500}
        //                 height={500}
        //                 alt="171x180"
        //                 src="https://images.pexels.com/photos/8483487/pexels-photo-8483487.jpeg?auto=compress&cs=tinysrgb&w=600"
        //             />
        //             <Figure.Caption>
        //                 Nulla vitae elit libero, a pharetra augue mollis interdum.
        //             </Figure.Caption>
        //         </Figure>
                
        //         <Figure>
        //             <Figure.Image
        //                 width={500}
        //                 height={500}
        //                 alt="171x180"
        //                 src="https://images.pexels.com/photos/8483487/pexels-photo-8483487.jpeg?auto=compress&cs=tinysrgb&w=600"
        //             />
        //             <Figure.Caption>
        //                 Nulla vitae elit libero, a pharetra augue mollis interdum.
        //             </Figure.Caption>
        //         </Figure>
        //             </div> */}
        // </Container>
        <Container>
            <section id='sale'>
            <h3>Sale</h3>
            <Row className='gap'>
                <Col md={6}>
                    <Card style={{ backgroundImage: `url(${banner.sale})`, backgroundSize:'contain',backgroundPosition:'right',backgroundRepeat:'no-repeat',height:'145px',width:'100%'}} className='twopart'>
                        <Card.Body>
                            <Card.Title>Sweaters & Shirts</Card.Title>
                            <Card.Text>
                                Get upto 30% off
                            </Card.Text>
                            <Button variant="success">Shop Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card style={{ backgroundImage: `url(${banner.sale2})`, backgroundSize:'contain',backgroundPosition:'right',backgroundRepeat:'no-repeat',height:'145px',width:'100%'}} className='twopart'>
                        <Card.Body>
                            <Card.Title>Denim & Tee's</Card.Title>
                            <Card.Text>
                                Get upto 25% off
                            </Card.Text>
                            <Button variant="success">Shop Now</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            </section>
        </Container>
    )
}
