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
                            // image={projects[1].image}
                            // alt={projects[1].alt}
                            description={projects[1].description}
                            link={projects[1].link}
                        />
                        </div>

                        <div className="col-sm-6">
                        <ProjectCard
                            id={projects[2].id}
                            key={projects[2].id}
                            name={projects[2].name}
                            // image={projects[2].image}
                            // alt={projects[2].alt}
                            description={projects[2].description}
                            link={projects[2].link}
                        />
                        </div>
                    </div>

                    <br/>

                    <div className="row">
                        <div className="col-sm-6">
                        <ProjectCard
                            id={projects[3].id}
                            key={projects[3].id}
                            name={projects[3].name}
                            // image={projects[3].image}
                            // alt={projects[3].alt}
                            description={projects[3].description}
                            link={projects[3].link}
                        />
                        </div>

                        <div className="col-sm-6">
                        <ProjectCard
                            id={projects[4].id}
                            key={projects[4].id}
                            name={projects[4].name}
                            // image={projects[4].image}
                            // alt={projects[4].alt}
                            description={projects[4].description}
                            link={projects[4].link}
                        />
                        </div>
                    </div>

                    <br/>

                    <div className="row">
                        <div className="col-sm-6">
                        <ProjectCard
                            id={projects[5].id}
                            key={projects[5].id}
                            name={projects[5].name}
                            // image={projects[5].image}
                            // alt={projects[5].alt}
                            description={projects[5].description}
                            link={projects[5].link}
                        />
                        </div>

                        {/* <div className="col-sm-6">
                        <ProjectCard
                            id={projects[6].id}
                            key={projects[6].id}
                            name={projects[6].name}
                            image={projects[6].image}
                            alt={projects[6].alt}
                            description={projects[6].description}
                            link={projects[6].link}
                        />
                        </div> */}
                    </div>

                </div>
            </div>    
            </main>  
        </div>
    );
};

export default Portfolio;