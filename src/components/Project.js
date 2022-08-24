import React from "react";
import Icon from '@mdi/react'
import { mdiOpenInNew } from '@mdi/js';

const Project = (props) => {
    const { name, description, image, id } = props;

    return(
        <div className="project" key={id}>
            <img className="projectImage" src={image} alt=""></img>
            <div className="projectInfo">
                <h3>{name}</h3>
                <div className="projectIcons">
                    <i class="devicon-github-original"></i>
                    <Icon path={mdiOpenInNew} size={1} />
                </div>
                <p className="projectDescription">{description}</p>
            </div>
        </div>
    )
}

export default Project;