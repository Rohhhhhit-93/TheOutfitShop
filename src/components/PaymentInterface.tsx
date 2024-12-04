import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { banner } from '../assets'
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaAppStoreIos, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { LiaCopyrightSolid } from 'react-icons/lia';



export default function PaymentInterface() {
  return (
  





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
