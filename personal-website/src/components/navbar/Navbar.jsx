import React from "react";
import Resume from '../../static/ChloeNg.pdf';
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [activeNav, setActiveNav] = useState('#home');
    return (
        <header>
            <nav> 
                <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}> Home </a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> About </a>
                <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}> Projects </a>
                <a href="#misc" onClick={() => setActiveNav('#misc')} className={activeNav === '#misc' ? 'active' : ''}> Misc. </a>
                <a href={Resume} target='_blank'> Resume </a>
            </nav>
        </header>
    );
}

export default Navbar;