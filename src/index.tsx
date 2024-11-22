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

import FocusOnSelect from './components/ProductCategory';
// import FocusOnSelect from './components/MultipleItems';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/Buynow';
import Categories from './components/Varieties';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    
    <Header />
    <Navbar />
    <SimpleSlider />
    <Categories />
    <Sale />
    <ProductList />
    <Footer />
    <PaymentInterface />
     
    
    
    
    
    
    </BrowserRouter>
);

