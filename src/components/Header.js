import React from "react";
import headshot from "../images/hs.jpg";

const Header = () => {

    return(
        <div id="header">
            <div className="headerSection">
                <div className="headContainer">
                    <h1 className="name">Nick Miles</h1>
                    <img className="headshot" src={headshot} alt=""></img>
                </div>
                <div className="aboutContainer">
                    <h2>About Me</h2>
                    <div className="aboutMe">
                        <p>Hello and welcome.</p>
                        <p>I'm a Los Angeles based Web Developer with a passion for all things coding. A problem solver at heart, I love figuring out how all of the peices of the puzzle fit together.</p>
                        <p>When I'm not coding I'm either gaming, watching LA sports, or kayaking with my dog.</p>
                    </div>
                    <div className="iconContainer aboutIcons">
                        <a href="https://github.com/kihno"><i className="devicon-github-original"></i></a>
                        <a href="https://linkedin.com/in/nicholas-miles-93328227/"><i className="devicon-linkedin-plain"></i></a>
                    </div>         
                </div>
            </div>
        </div>
    )
}

export default Header;