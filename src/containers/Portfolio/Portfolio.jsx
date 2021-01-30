import React from 'react';
import './Portfolio.css'


const Portfolio = () => {
    return (
        <div>
            <main>
            <div className="wrapper">
                <div className="main-body-contain">
                    <h1>Portfolio</h1>

                    <div className="row">
                        <div className="col-md-4">
                            <h6>Weather dashboard</h6> <a href="https://adrianalbr.github.io/weather-dashboard">
                            <img border="0" alt="weather" src="Assets/Images/weather.jpg" width="150" height="100"/>
                            </a>
                        </div>

                        <div className="col-md-4">
                            <h6>Password generator</h6> <a href="https://adrianalbr.github.io/password-generator">
                            <img border="0" alt="password" src="Assets/Images/password.jpg" width="150" height="100"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>  
            </main>  
        </div>
    );
};

export default Portfolio;