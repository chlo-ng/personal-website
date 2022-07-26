import React from "react";
import Resume from '../static/ChloeNg.pdf'

function Downloads() {
    return (
        <div className="downloads">
            <a href = {Resume} download className="button"> Download Resume </a>
            <a href="#contact" className="button"> Contact Info </a>
        </div>
    );
}

export default Downloads;