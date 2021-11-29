import React from 'react';
import Banner from '../Banner/Banner.js';
import Footer from '../Footer/Footer.js';
import Projects from '../Projects/Projects.js';
import Services from '../Services/Services.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Projects></Projects>
            <Footer></Footer>
        </div>
    );
};

export default Home;