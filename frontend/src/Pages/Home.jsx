import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Banner from '../Components/Banner/Banner';
import FreeBook from '../Components/cards/FreeBook';
import  Footer from '../Components/Footer/Footer';


const Home = () => {
  return (
    <>
    <Navbar />
    <Banner />
    <FreeBook />
    <Footer />
    </>
  )
}

export default Home