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


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Header />
    <Navbar />
    <SimpleSlider />
    <ProductList />
    
    </React.StrictMode>
);

