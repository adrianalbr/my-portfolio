import React from 'react';
import "./Footer.css"

const Footer = () => {
    return (
        <div>
    
            <div className="container-fluid">
                <div className="row footer-decoration">
                </div>
                <div className="row footer-main justify-content-center">
                    <a href="https://www.linkedin.com/in/adrianabonillaramirez/" target="_blank" rel="noreferrer">
                        <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>
                    </a>
                    <div>
                    <a href="https://github.com/adrianalbr" target="_blank" rel="noreferrer">
                        <i className="fa fa-github-alt fa-2x" aria-hidden="true"></i>
                    </a>
                    </div>
                    
                    <a href="Assets/Images/Adriana Bonilla Ramirez - Resume 10.28.pdf" target="_blank" rel="noreferrer">
                        <i className="fa fa-codepen fa-2x" aria-hidden="true"></i>
                    </a>

                </div>
            </div>

        </div>
    );
};

export default Footer;