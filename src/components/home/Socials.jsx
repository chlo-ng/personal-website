import React from "react";
import {RiGithubLine} from "react-icons/ri";
import {FiLinkedin} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";

function Socials() {
    return (
        <div className="socials__container"> 
            <a href="https://www.linkedin.com/in/chlo-ng/" className="socials" target="_blank" rel="noreferrer"> <FiLinkedin size={25}/> </a>
            <a href="mailto:chloeng73@gmail.com" className="socials" target="_blank" rel="noreferrer"> <HiOutlineMail size={25}/> </a>
            <a href="https://github.com/chlo-ng" className="socials" target="_blank" rel="noreferrer"> <RiGithubLine size={25}/> </a>
        </div>
    );
}

export default Socials;