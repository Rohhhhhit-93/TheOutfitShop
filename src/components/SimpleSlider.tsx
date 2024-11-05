import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Badge, Button, Container } from "react-bootstrap";
import { banner } from "../assets";


function SimpleSlider() {
  return (
    <Container>
      <Slider>
        <div>
          <div style={{ backgroundImage: `url(${banner.Image})` }} className="banner-slide">
            <div className="col-md-4">
              <Badge className="bg-warning" text="dark">Free Shipping - Orders Over $100</Badge>
              <h1>Free shipping on orders over <span className="text-danger">$100</span></h1>
              <p>Free Shipping to first time customers only , after promotions and discount are applied.</p>
              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
        <div>
          <div style={{ backgroundImage: `url(${banner.Image})` }} className="banner-slide">
            <div className="col-md-4">
              <Badge className="bg-warning" text="dark">Free Shipping - Orders Over $100</Badge>
              <h1>Free shipping on orders over <span className="text-danger">$100</span></h1>
              <p>Free Shipping to first time customers only , after promotions and discount are applied.</p>
              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
        <div>
          <div style={{ backgroundImage: `url(${banner.Image})` }} className="banner-slide">
            <div className="col-md-4">
              <Badge className="bg-warning" text="dark">Free Shipping - Orders Over $100</Badge>
              <h1>Free shipping on orders over <span className="text-danger">$100</span></h1>
              <p>Free Shipping to first time customers only , after promotions and discount are applied.</p>
              <Button>Shop Now</Button>
            </div>
          </div>
        </div>
      </Slider>

    </Container>


  );
}

export default SimpleSlider;
