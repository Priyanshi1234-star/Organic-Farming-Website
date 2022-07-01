import Cards from '../components/Cards';
import HeroSection from '../components/HeroElement';
import Footer from '../components/Footer';
import React from 'react';
import Stats from '../components/Stats';
import SupportEngine from '../components/supportengine/index';

function Home() {
  return (
    <>
        <HeroSection />
        <Cards />
        <Stats/>
        <SupportEngine/>
        <Footer/>
    </>
  )
}

export default Home