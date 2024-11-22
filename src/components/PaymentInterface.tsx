import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { banner } from '../assets'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LiaCopyrightSolid } from 'react-icons/lia';



export default function PaymentInterface() {
  return (
    // <Container>
    //   <hr></hr>

    //   <Col xs={5} sm={5} md={4} lg={2}>
    //     <Row lg={2}>

    //       <div className='footer-bar ' >
    //         <h3 className='fs-6 mt-4'><b>Payment Partners</b></h3>
    //         <img className='pay-img' src={require('../assets/materials/amazon-pay-icon.png')} />
    //         <img className='pay-img' src={require('../assets/materials/american-express-icon.png')} />
    //         <img className='pay-img' src={require('../assets/materials/master-card-icon.png')} />
    //         <img className='pay-img' src={require('../assets/materials/visa-icon.png')} />
    //         <img className='pay-img' src={require('../assets/materials/paypal-icon.png')} />

    //         <h3 className="footer2"><b>Get theoutfitshop App</b></h3>
    //         {/* <img style={{ backgroundImage: `url(${banner.playstore})` }} className="lowbanner-slide">
    //             </img> */}
    //         <IoLogoGooglePlaystore className="pay-img" />

    //         {/* <img style={{ backgroundImage: `url(${banner.appstore})` }} className="lowbanner-slide">
    //             </img> */}
    //         <FaAppStoreIos className="pay-img" />
    //       </div>
    //       <hr></hr>
    //       {/* <div className='text-align'>
    //         <h6>
    //         <LiaCopyrightSolid />
    //         2024 - 2025 theoutfitshop eCommerce.All Rights Reserved.By Udith Developer.
    //         </h6>
    //     </div> */}
    //     </Row>
    //   </Col>






    // </Container>
    <footer style={{ backgroundColor: '#f4f4f4', padding: '20px', display: 'flex', flexDirection: 'column', fontFamily: 'Arial, sans-serif', color: '#333' ,paddingTop:'50px'}}>
      <Container style={{paddingTop:'30px'}} className='border-top'>
        <Row>
          <Col md={6}>
            <div style={styles.paymentPartners}>
              <h4 style={{ fontSize: 'small',fontWeight:'bold'}}>Payment Partners</h4>
              <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Amazon_Pay_logo.svg" alt="Amazon Pay" style={styles.icon} />
              <img src="https://logodix.com/logo/61136.png" alt="American Express" style={styles.icon} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a4/Mastercard_2019_logo.svg" alt="MasterCard" style={styles.icon} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg" alt="PayPal" style={styles.icon} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" style={styles.icon} />
            </div>
          </Col>
          <Col md={6}>
            <div style={styles.deliveryApps}>
              <h4 style={{  fontSize: 'small',fontWeight:'bold' }}>Get deliveries with Theoutfitshop</h4>
              <img src="https://d1w35me0y6a2bb.cloudfront.net/assets/app+store+logo.png" alt="App Store" style={styles.storeBadge} />
              <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" style={styles.storeBadge} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col md={6}>
            <div style={{ textAlign: 'center', fontSize: '12px' }}>
              <p>© 2024 - 2025 Theoutfitshop. All rights reserved. Powered by <a href="#">Udith Developer</a>.</p>
            </div>
          </Col>
          <Col md={6}>
            <div style={styles.socialIcons}>
              <span>Follow us on</span>
              <FaFacebook style={styles.socialIcon} />
              <FaTwitter style={styles.socialIcon} />
              <FaInstagram style={styles.socialIcon} />
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

const styles = {
  footer: {
    backgroundColor: '#f4f4f4',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Arial, sans-serif',
    color: '#333',
  },
  paymentPartners: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '10px',
  },
  icon: {
    width: '40px',
    height: 'auto',
  },
  deliveryApps: {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
  },
  storeBadge: {
    width: '100px',
    height: 'auto',
  },
  copyright: {
    textAlign: 'center',
    fontSize: '12px',
  },
  socialIcons: {
    display: 'flex',
    alignItems: 'right',
    gap: '8px',
    fontSize: '12px'
  },
  socialIcon: {
    fontSize: '20px',
    cursor: 'pointer',
  },
};
