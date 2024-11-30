

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Buynow from './components/Buynow';
import Productdetail from './components/Productdetail';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/style.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Wishlist from './components/WishList';
import WishListSlice from './components/WishListSlice';




const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Buynow />} />
      <Route path="/products/:slug" element={<Productdetail />} />
      <Route path="wishlist" element={<Buynow />} />
      <Route path="/wishlist/:slug" element={<Wishlist />} />
    </Routes>
    
    
    
  );
};

export default App;
