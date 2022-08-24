import React from "react";
import Project from "./Project";
import uniqid from 'uniqid';

const Work = () => {
    const projects = [
        {
            name: "Taskmaster",
            description: "A todo app built with ES6 modules and weback.",
            image: "",
            id: uniqid()
        },
        {
            name: "Where's Waldo?",
            description: "",
            image: "",
            id: uniqid()
        },
        {
            name: "Shopping Cart",
            description: "",
            image: "",
            id: uniqid()
        },
        {
            name: "Battleship",
            description: "",
            image: "",
            id: uniqid()
        },
        {
            name: "Library App",
            description: "",
            image: "",
            id: uniqid()
        },
        {
            name: "Weather App",
            description: "",
            image: "",
            id: uniqid()
        },
        {
            name: "Calculator",
            description: "",
            image: "",
            id: uniqid()
        },
        {
            name: "Roshambo",
            description: "",
            image: "",
            id: uniqid()
        },
        {
            name: "Memory Game",
            description: "",
            image: "",
            id: uniqid()
        },
        {
            name: "Etch-a-Sketch",
            description: "",
            image: "",
            id: uniqid()
        },
        {
            name: "Tic Tac Toe",
            description: "",
            image: "",
            id: uniqid()
        },
    ]

    return(
        <div id="work">
            <h2>My Work</h2>
            <div className="techContainer">
                <i class="devicon-html5-plain"></i>
                <i class="devicon-css3-plain"></i>
                <i class="devicon-javascript-plain"></i>
                <i class="devicon-webpack-plain"></i>
                <i class="devicon-react-original"></i>
                <i class="devicon-firebase-plain"></i>
                <i class="devicon-nodejs-plain"></i>
            </div>
            <div className="projects">
                {projects.map(proj => {
                    return <Project name={proj.name} description={proj.description} image={proj.image} id={proj.id} />
                })}
            </div>
        </div>
    )
}

export default Work;