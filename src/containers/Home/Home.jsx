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
                        
                        <div class="container-xs">
                        <img src="src/assets/me.jpeg" class="rounded float-sm-left img-responsive" alt="Adriana" width="200"/>
                        </div>
                    </div>
                </div>
            </div>
            </main>
        </div>
    );
};

export default Home;