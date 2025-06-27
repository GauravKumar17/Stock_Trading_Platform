import React from 'react';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import HomePage from './landing_page/home/HomePage'
import Signup from './landing_page/signup/Signup'
import ProductPage from './landing_page/products/ProductPage';
import PricingPage from './landing_page/pricing/PricingPage';
import AboutPage from './landing_page/about/AboutPage';
import SupportPage from './landing_page/support/SupportPage';




function App() {
 

  return (
    <>
      <BrowserRouter>
      <ScrollToTop/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/products" element={<ProductPage/>} />
          <Route path="/about" element={<AboutPage/>} />
          <Route path="/pricing" element={<PricingPage/>} />
          <Route path="/support" element={<SupportPage/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
