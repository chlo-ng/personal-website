import React from "react";
import Resume from '../../static/ChloeNgResume.pdf';
import { useState } from "react";
import { useRef } from "react";


import { HiMenu } from "react-icons/hi";
import { IoIosCloseCircleOutline } from "react-icons/io";
import { MdOpenInNew } from "react-icons/md";
import "./Navbar.css";

function Navbar() {

    // Changing "active" class to active page
    const [activeNav, setActiveNav] = useState('#home');

    // Responsive Navbar (media query)
    const navRef = useRef();
    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }

    //Navbar Scrolls Up
    const [navBar, setNavbar] = useState(false);
    const scrollNav = () => {
        if (window.scrollY  >= 180) {
            setNavbar(true);
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", scrollNav);

    return (
        <header>
            <nav ref={navRef} className={navBar ? "active" : ""}> 
                <button className="nav-btn nav-close" onClick={showNavbar}> <IoIosCloseCircleOutline size={20}/> </button>
                <a href="#home" onClick={() => setActiveNav('#home')} className={activeNav === '#home' ? 'active' : ''}> Home </a>
                <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}> About </a>
                <a href="#projects" onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}> Projects </a>
                <a href="#misc" onClick={() => setActiveNav('#misc')} className={activeNav === '#misc' ? 'active' : ''}> Misc. </a>
                <a href={Resume} target='_blank' rel="noreferrer"> Resume <MdOpenInNew size={12}/> </a>
                
            </nav>

            <button className="nav-btn nav-menu" onClick={showNavbar}> <HiMenu size={20}/> </button>
            
        </header>
    );
}

export default Navbar;