import React from "react";
import Project from "./Project";

const Work = () => {
    const projects = [
        {
            name: "Todo App",
            description: "",
            image: "",
        },
        {
            name: "Where's Waldo?",
            description: "",
            image: "",
        },
        {
            name: "Shopping Cart",
            description: "",
            image: "",
        },
        {
            name: "Battleship",
            description: "",
            image: "",
        },
        {
            name: "Library App",
            description: "",
            image: "",
        },
        {
            name: "Weather App",
            description: "",
            image: "",
        },
        {
            name: "Calculator",
            description: "",
            image: "",
        },
        {
            name: "Rock, Paper, Scissors",
            description: "",
            image: "",
        },
        {
            name: "Memory Game",
            description: "",
            image: "",
        },
        {
            name: "Etch-a-Sketch",
            description: "",
            image: "",
        },
        {
            name: "Tic Tac Toe",
            description: "",
            image: "",
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
            {projects.map(proj => {
                return <Project name={proj.name} description={proj.description} image={proj.image} />
            })}
        </div>
    )
}

export default Work;