import React from 'react';
import './Home.css';
import Socials from './Socials';

function Home() {
    return (
        <div id='home'>
            <div className='container home__container'>
                <h3> Hello, I am </h3>
                <h1> Chloe Ng. </h1>
                <p> I am currently a Junior in <b>Georgia Tech</b>, 
                    <br /> pursuing a Bachelor's degree in <b> Computer Science</b>.
                </p>
                <h3> I would love to connect!</h3>
            </div>

            <Socials />
        </div>
    );
}

export default Home;