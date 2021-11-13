import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';

import SectionProducts from '../Products/SectionProducts/SectionProducts';
import Banner from './Banner/Banner';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Features></Features>
           <SectionProducts></SectionProducts>
        </div>
    );
};

export default Home;