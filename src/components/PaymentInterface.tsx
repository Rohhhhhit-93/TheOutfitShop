import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { banner } from '../assets'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos } from "react-icons/fa";



export default function PaymentInterface() {
  return (
    <Container>
      <hr></hr>
            <div className='footer-bar '>

                <h3 className='fs-6 mt-4'><b>Payment Partners</b></h3>
                <img className='pay-img' src={require('../assets/materials/amazon-pay-icon.png')} />
                <img className='pay-img' src={require('../assets/materials/american-express-icon.png')} />
                <img className='pay-img' src={require('../assets/materials/master-card-icon.png')} />
                <img className='pay-img' src={require('../assets/materials/visa-icon.png')} />
                <img className='pay-img' src={require('../assets/materials/paypal-icon.png')} />
                
                <h3 className='app-icons'>Get Deliveries with theoutfitshop</h3>
                {/* <img style={{ backgroundImage: `url(${banner.playstore})` }} className="lowbanner-slide">
                </img> */}
                <IoLogoGooglePlaystore className="lowbanner-slide" />

                {/* <img style={{ backgroundImage: `url(${banner.appstore})` }} className="lowbanner-slide">
                </img> */}
                <FaAppStoreIos className="lowbanner-slide"/>
                </div>
                <hr></hr>
        </Container>
  )
}
