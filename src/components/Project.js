import React from "react";
import Icon from '@mdi/react'
import { mdiOpenInNew } from '@mdi/js';

const Project = (props) => {
    const { name, description, image, repo, link } = props;

    return(
        <div className="project">
            <a href={link}><img className="projectImage" src={image} alt=""></img></a>
            <div className="projectInfo">
                <h3>{name}</h3>
                <div className="projectIcons">
                    <a href={repo}><i className="devicon-github-original"></i></a>
                    <a href={link}><Icon path={mdiOpenInNew} size={1} /></a>
                </div>
                <p className="projectDescription">{description}</p>
            </div>
        </div>
    )
}

export default Project;