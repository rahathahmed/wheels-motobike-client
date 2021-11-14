import React from 'react';
import About from '../About/About';
import Features from '../Features/Features';

import SectionProducts from '../Products/SectionProducts/SectionProducts';
import Reviewui from '../Reviewui/Reviewui';
import Banner from './Banner/Banner';



const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Features></Features>
           <SectionProducts></SectionProducts>
           <Reviewui></Reviewui>
        </div>
    );
};

export default Home;