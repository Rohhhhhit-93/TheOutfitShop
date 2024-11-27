

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Buynow from './components/Buynow';
import Productdetail from './components/ProductDetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Buynow />} />

      <Route path="/products/:slug" element={<Productdetail />} />
    </Routes>
  );
};

export default App;
