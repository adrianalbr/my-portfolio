import React from 'react';
import './Home.css'

const Home = () => {
    return (
        <div>
            <main>
            <div className="container about-me">
                 <div className="row">
                    <div className="col-md-9 main-body-contain">
                        <h1>About Adriana</h1>
                         <br/>
                        <div className="container-xs">
                        <img
                            src="https://github.com/adrianalbr/my-portfolio/blob/main/src/assets/me.jpeg?raw=true"
                            alt="Adriana"
                            class="img-thumbnail"
                            />
                        </div>
                        <br/>
                        <p>
                        Greetings! Welcome to my portfolio. I have been in IT for many
                        years working on a variety of roles such as Business Analyst,
                        Project Manager, and IT Manager always implementing and directing
                        technology, but very rarely building it...until now!
                        </p>

                        <br/>

                        <p>
                        I am excited to present to you what I have built with the
                        knowledge gained from the Georgia Tech Bootcamp coding
                        certification. This process has helped me to better understand the
                        challenges that developers and engineers go through on a daily
                        basis.
                        </p>

                        <br/>

                        <p>
                        In my current work I manage a team of data analysts and database
                        developers across the country. After completing this certification
                        one of my goals is to to be able to understand and direct my team
                        more efficiently, as well as to personally develop solutions.
                        </p>

                        <p>
                        I have a few brilliant and innovative ideas that I would like to
                        bring to market now that I have the skills to develop disruptive
                        applications. Excuse me... I have to stop typing... Shark Tank
                        just called.
                        </p>
                    </div>
                </div>
            </div>
            </main>
        </div>
    );
};

export default Home;