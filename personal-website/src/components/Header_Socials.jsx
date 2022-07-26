import React from "react";
import {RiGithubLine} from "react-icons/ri";
import {FiLinkedin} from "react-icons/fi";
import {HiOutlineMail} from "react-icons/hi";


function Header_Socials() {
    return (
        <div className="header__socials"> 
            

            <a href="https://www.linkedin.com/in/chlo-ng/" className="socials" target="_blank"> <FiLinkedin size={25}/> </a>
            <a href="mailto:chloeng73@gmail.com" className="socials" target="_blank"> <HiOutlineMail size={25}/> </a>
            <a href="https://github.com/chlo-ng" className="socials" target="_blank"> <RiGithubLine size={25}/> </a>
        </div>
    );
}

export default Header_Socials;