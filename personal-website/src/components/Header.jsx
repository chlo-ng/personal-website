import React from 'react';
import './Header.css';
import Downloads from './Downloads';
import Header_Socials from './Header_Socials';

function Header() {
    return (
        <header>
            <div className='container header__container'>
                <h5> Hello, I am </h5>
                <h1> Chloe Ng </h1>
                <h5> Computer Science Undergraduate </h5>
                <h5> Rising Junior </h5>

                <Downloads />
                <Header_Socials />

                
            </div>
        </header>
    );
}

export default Header;