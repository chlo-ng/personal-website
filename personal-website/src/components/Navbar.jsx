import React from "react";
import {HiOutlineHome} from "react-icons/hi";
import {TiLightbulb} from "react-icons/ti";
import {MdWorkOutline} from "react-icons/md";
import {BsPatchQuestion} from "react-icons/bs";
import "./Navbar.css";

function Navbar() {
    return (
        <nav> 
            <a href="#home" className="active"> <HiOutlineHome size={23}/> </a>
            <a href="#skills"> <TiLightbulb size={23}/> </a>
            <a href="#projects"> <MdWorkOutline size={23}/> </a>
            <a href="#about"> <BsPatchQuestion size={23}/> </a>
        </nav>
    );
}

export default Navbar;