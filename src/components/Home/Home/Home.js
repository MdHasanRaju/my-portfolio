import React from 'react';
import AboutMe from '../AboutMe/AboutMe.js';
import Banner from '../Banner/Banner.js';
import Projects from '../Projects/Projects.js';
import Services from '../Services/Services.js';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Projects></Projects>
            <AboutMe></AboutMe>
        </div>
    );
};

export default Home;