import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';
import Banner from './Banner/Banner';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Features></Features>
        </div>
    );
};

export default Home;