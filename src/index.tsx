import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SimpleSlider from './components/SimpleSlider';
import ProductList from './components/ProductList';
import Advertisement from './components/Sale';
import Sale from './components/Sale';
import Footer from './components/Footer';
import PaymentInterface from './components/PaymentInterface';
import DeveloperInfo from './components/DeveloperInfo';
import FocusOnSelect from './components/ProductCategory';
// import FocusOnSelect from './components/MultipleItems';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Navbar />
    <SimpleSlider />
    <FocusOnSelect />
    <Sale />
    <ProductList />
    <Footer />
    <PaymentInterface />
    <DeveloperInfo />
    
    
    </React.StrictMode>
);

