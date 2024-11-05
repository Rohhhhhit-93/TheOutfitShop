import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Container } from "react-bootstrap";

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <Container>
      <Slider {...settings}>
        <div className="card-container">
          <div >
          
          <img  src={require('../assets/materials/clothing-banner.jpg')}></img>
          
          </div>
          </div>
        <div className="card">
        <img src={require('../assets/materials/clothing-banner.jpg')}></img>
        </div>
        <div className="card">
        <img src={require('../assets/materials/clothing-banner.jpg')}></img>
        </div>
        
      </Slider>
      
    </Container>
      
    
  );
}

export default SimpleSlider;
