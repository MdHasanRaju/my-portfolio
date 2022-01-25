import React from 'react';
import Skills from '../../Skills/Skills.js';
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
            <Skills></Skills>
        </div>
    );
};

export default Home;