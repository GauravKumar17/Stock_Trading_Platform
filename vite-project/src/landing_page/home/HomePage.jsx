import React from 'react';
import Hero from './Hero';
import Awards from './Awards';
import Stats from './Stats';
import Pricing from './Pricing';
import Footer from '../Footer';
import OpenAccount from '../OpenAccount';
import Navbar from '../Navbar';
function HomePage() {
    return (
      <>
        <Navbar />
        <Hero />
        <Awards />
        <Pricing />
        <Stats />
        <OpenAccount />
        <Footer />
      </>
    );
}

export default HomePage;