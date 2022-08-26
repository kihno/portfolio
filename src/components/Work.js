import React from "react";
import Project from "./Project";
import uniqid from 'uniqid';
import todo from '../images/todo.jpg';
import battleship from '../images/battleship.jpg';
import calculator from '../images/calculator.jpg';
import library from '../images/library.jpg';
import memory from '../images/memory.jpg';
import restaurant from '../images/restaurant.jpg';
import shop from '../images/shop.jpg';
import sketch from '../images/sketch.jpg';
import tictactoe from '../images/tictactoe.jpg';
import waldo from '../images/waldo.jpg';
import weather from '../images/weather.jpg';
import roshambo from '../images/roshambo.jpg';

const Work = () => {
    const projects = [
        {
            name: "Taskmaster",
            description: "A todo app built with ES6 modules and weback.",
            image: todo,
            repo:"https://github.com/kihno/todo-app",
            link: "https://kihno.github.io/todo-app/",
            id: uniqid()
        },
        {
            name: "Where's Waldo?",
            description: "React photo tagging game built with Firebase database.",
            image: waldo,
            repo:"https://github.com/kihno/wheres-waldo",
            link: "https://kihno.github.io/wheres-waldo/",
            id: uniqid()
        },
        {
            name: "Shopping Cart",
            description: "React storefront mock-up with routing and shopping cart.",
            image: shop,
            repo:"https://github.com/kihno/shopping-cart",
            link: "https://kihno.github.io/shopping-cart/",
            id: uniqid()
        },
        {
            name: "Battleship",
            description: "TDD focused Battleship game with basic AI.",
            image: battleship,
            repo:"https://github.com/kihno/battleship",
            link: "https://kihno.github.io/battleship/",
            id: uniqid()
        },
        {
            name: "Library App",
            description: "Book tracking app built with local storage.",
            image: library,
            repo:"https://github.com/kihno/library-app",
            link: "https://kihno.github.io/library-app/",
            id: uniqid()
        },
        {
            name: "Weather App",
            description: "Basic weather app built with OpenWeather API.",
            image: weather,
            repo:"https://github.com/kihno/weather-app",
            link: "https://kihno.github.io/weather-app/",
            id: uniqid()
        },
        {
            name: "Calculator",
            description: "Vanilla javascript calculator.",
            image: calculator,
            repo:"https://github.com/kihno/calculator",
            link: "https://kihno.github.io/calculator/",
            id: uniqid()
        },
        {
            name: "Roshambo",
            description: "Classic rock, paper, scissors game.",
            image: roshambo,
            repo:"https://github.com/kihno/rock-paper-scissors",
            link: "https://kihno.github.io/rock-paper-scissors/",
            id: uniqid()
        },
        {
            name: "Memory Game",
            description: "React memory game app built with API call.",
            image: memory,
            repo:"https://github.com/kihno/memory-game",
            link: "https://kihno.github.io/memory-game/",
            id: uniqid()
        },
        {
            name: "Etch-a-Sketch",
            description: "In-browser sketch with variable grid.",
            image: sketch,
            repo:"https://github.com/kihno/etch-a-sketch",
            link: "https://kihno.github.io/etch-a-sketch/",
            id: uniqid()
        },
        {
            name: "Tic Tac Toe",
            description: "Class game app with basic AI.",
            image: tictactoe,
            repo:"https://github.com/kihno/tic-tac-toe",
            link: "https://kihno.github.io/tic-tac-toe/",
            id: uniqid()
        },
        {
            name: "Resaurant Website",
            description: "Restaurant mock-up page built with ES6 modules and JS generated pages.",
            image: restaurant,
            repo:"https://github.com/kihno/restaurant-page",
            link: "https://kihno.github.io/restaurant-page/",
            id: uniqid()
        }
    ]

    return(
        <div id="work">
            <h2>My Work</h2>
            <div className="techContainer">
                <i className="devicon-html5-plain"></i>
                <i className="devicon-css3-plain"></i>
                <i className="devicon-javascript-plain"></i>
                <i className="devicon-webpack-plain"></i>
                <i className="devicon-react-original"></i>
                <i className="devicon-firebase-plain"></i>
                <i className="devicon-nodejs-plain"></i>
            </div>
            <div className="projects">
                {projects.map(proj => {
                    return <Project name={proj.name} description={proj.description} image={proj.image} repo={proj.repo} link={proj.link} key={proj.id} />
                })}
            </div>
        </div>
    )
}

export default Work;