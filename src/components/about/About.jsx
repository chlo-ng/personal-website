import React from "react";
import ProfPic from "../../static/prof-pic-3.JPG";
import './About.css'

function About() {
    return (
        <div id="about" className="about">
            <h2 className='headings'> About Me </h2>
            <div className="container">
                <div className="about__container">
                    <p> Hello! My name is Chloe, and I first stumbled upon this field with the 
                        fascination that with just a few lines of code, we can create incredible things.
                    </p>
                    <br />
                    <p> Although I am still in the middle of earning a Bachelor's degree, 
                        my journey so far has introduced me to many aspects of Computer Science. 
                        Some aspects that I have been interested in are  
                        <b> Human-Computer Interaction</b> and <b>User-Centered Design</b>.  
                    </p>
                    <br />
                    <p> 
                        As of now, I would like to apply the skills I've learned 
                        to products such as web development, creating games, and education.
                    </p>
                </div>

                <div className='img__container'> 
                    <img alt="creator" className="prof-pic" src={ProfPic}></img>
                </div>

                {/* <div className="about__container">
                    <p> Here are some languages that I am confident in: </p>
                    <ul>
                        <li> React.js </li>
                        <li> Java </li>
                        <li> HTML/CSS </li>
                    </ul>
                </div> */}
            </div>
        </div>
    );
}

export default About;