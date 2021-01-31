import React from 'react';
import './Portfolio.css';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import projects from '../../projects.json';
import music from '../../assets/music.jpeg';



const Portfolio = () => {
    return (
        <div>
            <main>
            <div className="wrapper">
                <div className="main-body-contain">
                    <h1>Portfolio</h1>
                    <br/>

                    <div className="row">
                        <div className="col-sm-6">
                        <ProjectCard
                            id={projects[1].id}
                            key={projects[1].id}
                            name={projects[1].name}
                            image={projects[1].image}
                            alt={projects[1].alt}
                            description={projects[1].description}
                            link={projects[1].link}
                        />
                        </div>

                        <div className="col-sm-6">
                        <ProjectCard
                            id={projects[2].id}
                            key={projects[2].id}
                            name={projects[2].name}
                            image={projects[2].image}
                            alt={projects[2].alt}
                            description={projects[2].description}
                            link={projects[2].link}
                        />
                        </div>

                        
                    </div>
                </div>
            </div>    
            </main>  
        </div>
    );
};

export default Portfolio;