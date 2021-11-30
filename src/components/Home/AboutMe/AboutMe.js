import React from 'react';
import { Link } from 'react-router-dom';
import me from '../../../images/sea1.jpg';

const AboutMe = () => {
    return (
        
        <div id="about" style={{margin:"100px 0px"}} class="bg-dark py-5">
        <div class="container">
            <div class="text-center text-white pb-3">
                <h1>ABOUT ME</h1>
                <p>----who i am----</p>
            </div>
            <div class="row pb-5">
                <div class="col-lg-6 mb-3">
                    <img width="350px" src={me} alt=""/>
                </div>
                <div  class="col-lg-6 text-white my-auto">
                    <h3>I'm Mahmudul Hasan and I'm a Developer</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi ut voluptatum eveniet doloremque autem excepturi eaque,
                    sit laboriosam voluptatem nisi delectus. Facere explicabo hic minus accusamus alias fuga nihil dolorum quae. Explicabo
                    illo unde, odio consequatur ipsam possimus veritatis, placeat, ab molestiae velit inventore exercitationem consequuntur
                    blanditiis omnis beatae. Dolor iste excepturi ratione soluta quas culpa voluptatum repudiandae harum non.</p>
                    <Link to="/contact"><button className="btn btn-success">Contact Me</button></Link>
                </div>
            </div>

        </div>
    </div>

    );
};

export default AboutMe;