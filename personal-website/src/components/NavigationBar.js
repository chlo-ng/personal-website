import React, { useState } from "react";
import { Navbar, Nav, Button, Offcanvas, OffcanvasBody, OffcanvasHeader, Container } from "react-bootstrap";
import {LinkContainer} from 'react-router-bootstrap';
import { Link } from 'react-router-dom';

function NavigationBar() {
    return (
        <div>
            <Navbar>
            <Link to="/home"><h2>HOME</h2></Link>
            </Navbar>
        </div>
    );
}

export default NavigationBar;