import React from 'react';
import './ProjectCard.css';


const ProjectCard = ({ name, link, image, description, alt }) => {
    return (
        <div>
    
            <div className="card" style={{ width: "18rem" }}>
                <img src={image} className="card-img-top" alt={alt} />
                <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{description}</p>
                <a href={link} className="btn">
                    Github Repo
                </a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;