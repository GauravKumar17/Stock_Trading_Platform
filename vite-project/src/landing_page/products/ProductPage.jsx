import React from 'react';
import Navbar from '../Navbar';
import Hero from './Hero';
import LeftSection from './LeftSection';
import RightSection from './RightSection';
import Universe from './Universe';
import Footer from '../Footer';



function ProductPage() {
    return ( 
        <>
        <Navbar/>
        <Hero/>
        <LeftSection heading="Kite" desc="Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices" image="media/productKite.png" link1="Try demo " link2="Learn more"/>
         <RightSection heading="Console" desc="The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations." image="media/productsConsole.png" link1="Learn more" />
        <LeftSection heading="Coin" desc="Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices." image="media/productsCoin.png" link1="Coin" link2=" "/>
        <RightSection heading="Kite Connect API" desc="Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase." image="media/kiteConnect.svg" link1="Kite Connect" />
        <LeftSection heading="Varsity Mobile" desc="An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go." image="media/varsityMobile.png" link1=" " link2=" "/>
        <Universe/>
        <Footer/>
        
        </>
     );
}

export default ProductPage;