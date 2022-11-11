import React from "react";
import './Projects.css';
import {RiGithubLine} from "react-icons/ri";
import { MdOpenInNew } from "react-icons/md";

function Projects() {
    return (
        <div id="projects">
            <div className='container'> 
                <h2> Recent Projects </h2>
                <div className="project__hbox">

                    {/* div start */}
                    <div className="project__container project-1">
                         <h4> Campus Discovery Services </h4>

                         <p> A website that displays on-campus events – allowing users to read 
                            information about the events, RSVP and even create their own! </p>

                        <ul className="projects__list">
                            <li>
                                React.js
                            </li>
                            <li>
                                Typescript
                            </li>
                            <li>
                                Java
                            </li>
                         </ul>
                         <div> 
                            <a href="https://github.gatech.edu/cs2340-group7/campus-discovery" className="socials" target="_blank" rel="noreferrer"> <RiGithubLine size={25}/> </a>
                         </div>
                    </div>
                    {/* div end */}

                    
                    {/* div start */}
                    <div className="project__container project-2">
                         <h4> Paw-champ </h4>

                         <p> A website that promotes pet adoption in shelters, by
                            having a fun feature that displays random cat and/or dog facts. </p>
                        
                        <p> Users are able to search through a database of adoption shelters
                            on our website. They can also enhance the search results 
                            by filtering shelters by their state or zip code. </p>

                        <ul className="projects__list">
                            <li>
                                HTML/CSS
                            </li>
                            <li>
                                JavaScript
                            </li>
                            <li>
                                Python + Flask
                            </li>
                         </ul>
                         <div> 
                            <a href="https://github.com/jrosmaidy1/PAW-champ" className="socials" target="_blank" rel="noreferrer"> <RiGithubLine size={25}/> </a>
                            <a href="https://devpost.com/software/paw-champ?ref_content=user-portfolio&ref_feature=in_progress" className="socials" target="_blank" rel="noreferrer"> <MdOpenInNew size={25}/> </a>
                         </div>
                    </div>
                    {/* div end */}

                    {/* div start */}
                    <div className="project__container project-3">
                        <h4> Clutch.It </h4>

                         <p> A website that displays tips and tricks
                            for an first-person shooter game, Valorant. </p>
                         <p> Focused on UI/UX designing 
                            and front-end development. </p>

                         <ul className="projects__list">
                            <li>
                                React.js
                            </li>
                            <li>
                                Figma
                            </li>
                            <li>
                                Bootstrap
                            </li>
                         </ul>

                         <div className="projects__hbox"> 
                            <a href="https://github.com/jamin-git/clutch-it" className="socials" target="_blank" rel="noreferrer"> <RiGithubLine size={25}/> </a>
                         </div>
                    </div>
                    {/* div end */}

                    {/* div start */}
                    <div className="project__container project-4">
                        <h4> "Locate-a-Cleaner" Prototype </h4>

                        <p> A research project where my team and I delved into existing home-related technologies. </p>
                        <br />
                        <p> Our end-product is a mobile app that assists users in tracking repetitive chores, guides for cleaning 
                            their household, and the main feature, locating a cleaner to hire. </p>
                        <br />
                        <p> The main feature is essentially an Uber app specifically for cleaners, where cleaners can set up profiles,
                            customers can hire them by radius, and also leave reviews after the job is done. </p>
                        
                            <ul className="projects__list">
                            <li>
                                Figma
                            </li>
                         </ul>
                        <div> 
                            <a href="https://www.figma.com/file/SPHsdtxrCq8EvinzTFn8DI/Deliverable-%233?node-id=0%3A1" className="socials" target="_blank" rel="noreferrer"> <MdOpenInNew size={25}/> </a>
                        </div>
                    </div>
                    {/* div end */}
                    
                </div>     
            </div>
        </div>
    );
}

export default Projects;